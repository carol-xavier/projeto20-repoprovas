var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import authRepository from "../repositories/authRepository.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
function createUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const verifyEmail = yield authRepository.findUserByEmail(data.email);
        if (verifyEmail)
            throw { type: "conflict" };
        const passwordHash = bcrypt.hashSync(data.password, 10);
        const user = Object.assign(Object.assign({}, data), { password: passwordHash });
        return user;
    });
}
;
function insert(user) {
    return __awaiter(this, void 0, void 0, function* () {
        yield authRepository.insertUser(user);
    });
}
;
function login(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield findUserByEmail(data);
        const passwordValidation = bcrypt.compareSync(data.password, user.password);
        if (!passwordValidation)
            throw { type: "unauthorized" };
        const secretKey = process.env.JWT_SECRET;
        const session = { email: user.email, userId: user.id };
        const setting = { expiresIn: 60 * 60 * 5 };
        const token = jwt.sign(session, secretKey, setting);
        return token;
    });
}
function findUserByEmail(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield authRepository.findUserByEmail(data.email);
        if (!user)
            throw { type: "not_found" };
        return user;
    });
}
;
export default {
    createUser,
    insert,
    login
};
