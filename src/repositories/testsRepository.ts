import prisma from '../config/database.js';
import { Test } from '@prisma/client';
import { CreateTestData } from '../utils/types.js';

type CreateTestDB = Omit<Test, "id">;

export async function insertTest (testData: CreateTestDB) {
    await prisma.test.create({
        data: testData
    });
};

async function findCategoryByName(categoryName: string) {
    const category = await prisma.category.findFirst({
        where: {
            name: categoryName
        }
    });

    return category.id;
};

async function findDisciplineByName(disciplineName: string) {
    const discipline = await prisma.discipline.findFirst({
        where: {
            name: disciplineName
        }
    });

    return discipline.id;
};

async function findTeacherByName(teacherName: string) {
    const teacher = await prisma.teacher.findFirst({
        where: {
            name: teacherName
        }
    });

    return teacher.id;
};

async function findTeacherDisciplineId(teacherId: number, disciplineId: number) {
    const teacherDiscipline = await prisma.teacherDiscipline.findFirst({
        where: {
            teacherId,
            disciplineId
        }
    });

    return teacherDiscipline.id;
};

const testsRepository = {
    insertTest,
    findCategoryByName,
    findDisciplineByName,
    findTeacherByName,
    findTeacherDisciplineId
};

export default testsRepository;