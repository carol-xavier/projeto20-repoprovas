var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import supertest from 'supertest';
import app from '../src/index.js';
import prisma from '../src/config/database.js';
import userFactory from './factories/userFactory.js';
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$executeRaw `TRUNCATE TABLE users`;
}));
describe("auth routes", () => {
    it("Given email and password, user is created. statusCode=201", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = userFactory.createUser();
        const promise = yield supertest(app).post(`/sign-up`).send(user);
        expect(promise.status).toBe(201);
        const userDB = yield prisma.user.findFirst({
            where: { email: user.email }
        });
        expect(userDB.email).toBe(user.email);
    }));
    it("given valid email and password, receive token", () => __awaiter(void 0, void 0, void 0, function* () {
        const login = userFactory.createUser();
        const user = yield userFactory.createLogin(login);
        const response = yield supertest(app).post(`/sign-in`).send({
            email: user.email,
            password: user.plainPassword
        });
        const token = response.body.token;
        expect(token).not.toBeNull();
    }));
});
