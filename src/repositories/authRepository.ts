import prisma from '../config/database.js';
import { CreateUserData } from "../services/authService";

export async function insertUser(user: CreateUserData) {
    return prisma.user.create({
      data: user,
    });
  };

  export async function findUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: {
          email,
        },
      });
  };

  const authRepository = {
    insertUser,
    findUserByEmail
  };

  export default authRepository;