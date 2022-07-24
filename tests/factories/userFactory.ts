import { faker } from '@faker-js/faker';
import prisma from '../../src/config/database.js';
import bcrypt from 'bcrypt';

const email:string = faker.internet.email();

function createUser(passwordLength = 10) {
  return {
    email,
    password: faker.internet.password(passwordLength)
  }
}

interface Login { email: string, password: string };

async function createLogin(login: Login) {
  const user = await prisma.user.create({
    data: {
      email: login.email,
      password: bcrypt.hashSync(login.password, 10)
    }
  });

  return { ...user, plainPassword: login.password };
}

const userFactory = {
  createUser,
  createLogin
}

export default userFactory;

