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
const connection_1 = __importDefault(require("../connection"));
const authenticator_1 = require("../services/authenticator");
const hashManager_1 = require("../services/hashManager");
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (!email) {
                throw new Error("Please fill email field");
            }
            if (!password) {
                throw new Error("Please fill password field");
            }
            const queryResult = yield connection_1.default.raw(`  
         SELECT * FROM to_do_list_users
         WHERE email = "${email}";
      `);
            const user = queryResult[0][0];
            if (!user) {
                throw new Error("User not found");
            }
            const passwordIsCorrect = hashManager_1.compareHash(password, user.password);
            if (!passwordIsCorrect) {
                throw new Error("Invalid Credentials");
            }
            const token = authenticator_1.generateToken({
                id: user.id,
                role: user.role
            });
            res.status(200).send({ token });
        }
        catch (error) {
            res.send({ error: error.message });
        }
    });
}
exports.default = login;
