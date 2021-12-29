"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("../connection"));
const hashManager_1 = require("../services/hashManager");
const transporter_1 = require("../services/transporter");
dotenv_1.default.config();
function resetPassword(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = req.body.email;
            const [user] = yield connection_1.default("to_do_list_users").where({ email });
            if (!user) {
                res.statusCode = 400;
                throw new Error("E-mail não cadastrado");
            }
            const characters = "abcdefABCDEF12345!?/[]{}";
            let newPassword = "";
            for (let i = 0; i < 10; i++) {
                const index = Math.floor(Math.random() * (characters.length - 1));
                newPassword += characters[index];
            }
            const newHash = hashManager_1.createHash(newPassword);
            yield connection_1.default("to_do_list_users")
                .update({ password: newHash })
                .where({ email });
            const info = yield transporter_1.transporter.sendMail({
                from: `<${process.env.NODEMAILER_USER}>`,
                to: email,
                subject: "Esse é o teste 01",
                text: `Sua nova senha é ${newPassword}`,
                html: `<p>Sua nova senha é <strong>${newPassword}</strong></p>`
            });
            console.log({
                newPassword,
                oldHash: user.password,
                newHash: newHash,
                info
            });
            res.send();
        }
        catch (error) {
            res.send({ error: error.message });
        }
    });
}
exports.default = resetPassword;
