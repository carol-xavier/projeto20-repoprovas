var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { faker } from '@faker-js/faker';
import prisma from '../../src/config/database.js';
import bcrypt from 'bcrypt';
const email = faker.internet.email();
function createUser(passwordLength = 10) {
    return {
        email,
        password: faker.internet.password(passwordLength)
    };
}
;
function createLogin(login) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                email: login.email,
                password: bcrypt.hashSync(login.password, 10)
            }
        });
        return Object.assign(Object.assign({}, user), { plainPassword: login.password });
    });
}
const userFactory = {
    createUser,
    createLogin
};
export default userFactory;
