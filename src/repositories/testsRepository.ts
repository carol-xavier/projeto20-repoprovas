import prisma from '../config/database.js';
import { TestDB } from '../utils/types.js';

export async function insertTest(testData: TestDB) {
    await prisma.test.create({
        data: testData
    });
};

export async function getAllTests() {
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
                            discipline: { select: {
                                id: true,
                                name:true,
                                teacherDisciplines: true,
                                term: true
                            } },
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

// async function getAllTests() {
//     const tests = await prisma.test.findMany({
//         include:{
//             teacherDiscipline:true
//         }
//     });
//     return tests;
// };

// async function getAllTests() {
//     const tests = await prisma.$queryRaw`
//         SELECT t.name as testName, 
//         t."pdfUrl" as pdfUrl, c.name as category, 
//         u.name as discipline, w.name as teacher, z.number as term
//         FROM tests t
//         JOIN categories c ON t."categoryId" = c.id
//         JOIN "teachersDisciplines" h ON t."teacherDisciplineId" = h.id
//         JOIN disciplines u ON h."disciplineId" = u.id
//         JOIN teachers w ON h."teacherId" = w.id
//         JOIN terms z ON u."termId" = z.id
//         GROUP BY (t.name, t."pdfUrl", c.name, u.name, w.name, z.number)
//         ORDER BY (u.name, z.number, c.name)    
//     `
//     return tests;
// };

const testsRepository = {
    insertTest,
    getAllTests
};

export default testsRepository;