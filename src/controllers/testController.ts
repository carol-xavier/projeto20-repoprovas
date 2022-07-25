import { Request, Response } from "express";
import testsService from "../services/testService.js";
import {
    CreateTestData,
    TestDisciplineData,
    TestTeacherData
} from "../utils/types.js";

export async function createTest(req: Request, res: Response) {
    const data: CreateTestData = req.body;

    await testsService.insertTest(data);

    res.status(201).send("Your test was posted!");
};

export async function getTests(req: Request, res: Response) {
    const { groupBy } = req.query;
    if (groupBy === "teachers") {
        const tests: TestTeacherData[] = await getTestsByTeachers();
        return res.send({ tests });
    };

    if (groupBy === "disciplines") {
        const tests: TestDisciplineData[] = await getTestsByDisciplines();
        return res.send({ tests });
    };
};

async function getTestsByTeachers() {
    return await testsService.getTestsGroupedByTeacher();
};

async function getTestsByDisciplines() {
    return await testsService.getTestsGroupedByDisciplines();
};