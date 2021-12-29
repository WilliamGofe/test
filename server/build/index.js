"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const editUser_1 = __importDefault(require("./endpoints/editUser"));
const createUser_1 = __importDefault(require("./endpoints/createUser"));
const login_1 = __importDefault(require("./endpoints/login"));
const resetPassword_1 = __importDefault(require("./endpoints/resetPassword"));
app_1.default.post('/user/signup', createUser_1.default);
app_1.default.post('/user/login', login_1.default);
app_1.default.put('/user/edit/', editUser_1.default);
app_1.default.post('/user/password/reset', resetPassword_1.default);
