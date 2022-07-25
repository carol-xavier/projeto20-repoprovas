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
import testFactory from './factories/testFactory.js';
let token;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    const login = userFactory.createUser();
    const user = yield userFactory.createLogin(login);
    const response = yield supertest(app).post(`/sign-in`).send({
        email: user.email,
        password: user.plainPassword
    });
    token = response.body.token;
}));
// beforeEach(async () => {
//     await prisma.$executeRaw`TRUNCATE TABLE tests;`;
// });
describe("POST/tests", () => {
    it("Sending the correct object, post a new test in the DB. statusCode=201", () => __awaiter(void 0, void 0, void 0, function* () {
        const test = testFactory.createTest();
        const promise = yield supertest(app)
            .post(`/tests`)
            .send(test)
            .set('Authorization', `Bearer ${token}`);
        expect(promise.status).toBe(201);
    }));
});
describe("GET/tests", () => {
    it("return all tests gruped by discipline. statusCode=200", () => __awaiter(void 0, void 0, void 0, function* () {
        const promise = yield supertest(app)
            .get(`/tests?groupBy=disciplines `)
            .set('Authorization', `Bearer ${token}`);
        expect(promise.status).toBe(200);
    }));
    it("return all tests gruped by teacher. statusCode=200", () => __awaiter(void 0, void 0, void 0, function* () {
        const promise = yield supertest(app)
            .get(`/tests?groupBy=teachers `)
            .set('Authorization', `Bearer ${token}`);
        expect(promise.status).toBe(200);
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
