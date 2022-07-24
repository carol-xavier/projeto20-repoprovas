import prisma from '../config/database.js';
import { TestDB } from '../utils/types.js';

export async function insertTest(testData: TestDB) {
    await prisma.test.create({
        data: testData
    });
};
export async function getAllTestsByTeacher() {
    return await prisma.teacherDiscipline.findMany({
        select:{
            id: true,
            discipline: {include:{teacherDisciplines:true, term:true}},
            teacher: true,
            tests: {select:{
                id: true,
                name: true,
                pdfUrl: true,
                category: true,
            }},
        }
    })
};

export async function getAllTestsByDiscipline() {
    return await prisma.term.findMany({
        select: {
            id: true,
            number: true,
            disciplines: {
                select: {
                    id: true,
                    name: true,
                    term: true,
                    teacherDisciplines: {
                        select: {
                            id: true,
                            discipline: { select: {id: true, name:true} },
                            teacher: { select: { id: true, name: true } },
                            tests: { select: { 
                                id: true,
                                name: true,
                                pdfUrl: true,
                                category: true,
                             }},
                        },
                    },
                },
            },
        },
    });
};

const testsRepository = {
    insertTest,
    getAllTestsByTeacher,
    getAllTestsByDiscipline
};

export default testsRepository;