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
const types_1 = require("../types");
const idGenerator_1 = require("../services/idGenerator");
const authenticator_1 = require("../services/authenticator");
const hashManager_1 = require("../services/hashManager");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, nickname, email, password, role, cep, numero, complemento } = req.body;
            if (!name || !nickname || !email || !password || !role) {
                res.statusCode = 422;
                throw new Error("Preencha os campos 'name','nickname', 'role', 'password' e 'email'");
            }
            if (!(role in types_1.USER_ROLES)) {
                throw new Error("'role' deve ser 'NORMAL' ou 'ADMIN'");
            }
            const [user] = yield connection_1.default('to_do_list_users')
                .where({ email });
            if (user) {
                res.statusCode = 409;
                throw new Error('Email já cadastrado');
            }
            const id = idGenerator_1.generateId();
            const newUser = {
                id,
                name,
                nickname,
                email,
                password: hashManager_1.createHash(password),
                role,
                cep,
                numero,
                complemento
            };
            yield connection_1.default('to_do_list_users')
                .insert(newUser);
            const token = authenticator_1.generateToken({
                id,
                role
            });
            res.status(201).send({ newUser, token });
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    });
}
exports.default = createUser;
