import { User } from "@prisma/client";
import { CreateUserData } from "../utils/types.js";
import authRepository from "../repositories/authRepository.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

async function createUser(data: CreateUserData) {
    const verifyEmail = await authRepository.findUserByEmail(data.email);
    if (verifyEmail) throw { type: "conflict" };

    const passwordHash = bcrypt.hashSync(data.password, 10);
    const user = { ...data, password: passwordHash };

    return user;
};

async function insert(user: CreateUserData) {
    await authRepository.insertUser(user);
};

async function login(data: CreateUserData) {
    const user = await findUserByEmail(data);
    const passwordValidation = bcrypt.compareSync(data.password, user.password);
    if (!passwordValidation) throw { type: "unauthorized" };

    const secretKey = process.env.JWT_SECRET;
    const session = { email: user.email, userId: user.id};
    const setting = { expiresIn: 60 * 60 * 5 };
    const token = jwt.sign(session, secretKey, setting);

    return token;
}

async function findUserByEmail(data: CreateUserData) {
    const user = await authRepository.findUserByEmail(data.email);
    if (!user) throw { type: "not_found" };

    return user;
};

export default {
    createUser,
    insert,
    login
};
