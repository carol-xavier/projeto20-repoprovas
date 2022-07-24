import { Request, Response } from "express";
import { CreateUserData } from "../utils/types.js";
import authService from "../services/authService.js";

export async function userSignUp(req: Request, res: Response) {
    const data: CreateUserData = req.body;
    const user = await authService.createUser(data);
    await authService.insert(user);

    res.sendStatus(201);
};

export async function userSignIn(req: Request, res: Response) {
    const data: CreateUserData = req.body;
    const token = await authService.login(data);

    return res.status(201).send({ token });
};

