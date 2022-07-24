import { Request, response, Response } from "express";
import { CreateTestData } from "../utils/types.js";
import { TestDB } from '../utils/types.js';
import testsService from "../services/testService.js";

export async function createTest(req: Request, res: Response) {
    const data: CreateTestData = req.body;

    await testsService.insertTest(data);

    res.status(201).send("Your test was posted!");
};

export async function getTests(req: Request, res: Response) {
    const { groupBy } = req.query;
    if(groupBy === "teachers") {
        const tests = await getTestsByTeachers();
        return res.send({tests});
    };

    if(groupBy === "disciplines") {
        const tests = await getTestsByDisciplines();
        return res.send({tests});
    };
};

async function getTestsByTeachers() {
    return await testsService.getTestsGroupedByTeacher();
};

async function getTestsByDisciplines() {
    return await testsService.getTestsGroupedByDisciplines();
};