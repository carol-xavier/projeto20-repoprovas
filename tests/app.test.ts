import supertest from 'supertest';
import app from '../src/index.js';
import prisma from '../src/config/database.js';
import userFactory from './factories/userFactory.js';

beforeEach(async () => {
    await prisma.$executeRaw`DELETE FROM users where email = 'test@gmail.com'`;
  });
  
  describe("auth routes", () => {
      it("Given email and password, user is created", async () => {
          const user = userFactory.createUser();
          const promise = await supertest(app).post(`/sign-up`).send(user);
          expect(promise.status).toBe(201);
  
          const userDB = await prisma.user.findFirst({
              where: {email: user.email }
            });
          expect(userDB.email).toBe(user.email);
      });
  
      it("given valid email and password, receive token",async () => {
          const login = userFactory.createUser();
          const user: any = await userFactory.createLogin(login);
          
          const response = await supertest(app).post(`/sign-in`).send({
            email: user.email,
            password: user.plainPassword
          });
          const token = response.body.token;
          expect(token).not.toBeNull();
      })
  });
  
  afterAll(async () => {
      await prisma.$disconnect();
  });