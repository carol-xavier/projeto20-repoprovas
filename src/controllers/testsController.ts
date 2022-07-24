import { Request, Response } from "express";
import { CreateTestData } from "../utils/types.js";
import testsService from "../services/testsService.js";

export async function createTest (req: Request, res: Response) {
    const data: CreateTestData = req.body;

    await testsService.insertTest(data);
    
    res.status(201).send("Your test was posted!");
};