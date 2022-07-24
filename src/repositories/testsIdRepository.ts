import prisma from '../config/database.js';
import { TestDB } from '../utils/types.js';

export async function insertTest (testData: TestDB) {
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

const testsIdRepository = {
    insertTest,
    findCategoryByName,
    findDisciplineByName,
    findTeacherByName,
    findTeacherDisciplineId
};

export default testsIdRepository;