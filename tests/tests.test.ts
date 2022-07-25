import supertest from 'supertest';
import app from '../src/index.js';
import prisma from '../src/config/database.js';
import userFactory from './factories/userFactory.js';
import testFactory from './factories/testFactory.js';

let token: string;

beforeAll(async () => {
    const login = userFactory.createUser();
    const user: any = await userFactory.createLogin(login);

    const response = await supertest(app).post(`/sign-in`).send({
      email: user.email,
      password: user.plainPassword
    });
    token = response.body.token
});

describe("POST/tests", () => {
    it("Sending the correct object, post a new test in the DB. statusCode=201", async () => {
        const test = testFactory.createTest();
        const promise = await supertest(app)
            .post(`/tests`)
            .send(test)
            .set('Authorization', `Bearer ${token}`);
        expect(promise.status).toBe(201);
    });

    it("Sending the object with missing values. statusCode=404", async () => {
        const test = testFactory.createWrongTest();
        const promise = await supertest(app)
            .post(`/tests`)
            .send(test)
            .set('Authorization', `Bearer ${token}`);
        expect(promise.status).toBe(422);
    });
});

describe("GET/tests", () => {
    it("return all tests gruped by discipline. statusCode=200", async () => {
        const promise = await supertest(app)
            .get(`/tests?groupBy=disciplines `)
            .set('Authorization', `Bearer ${token}`);
        expect(promise.status).toBe(200);
    });

    it("return all tests gruped by teacher. statusCode=200", async () => {
        const promise = await supertest(app)
            .get(`/tests?groupBy=teachers `)
            .set('Authorization', `Bearer ${token}`);
        expect(promise.status).toBe(200);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
  });