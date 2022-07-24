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

// export async function getAllTests() {
//     return await prisma.term.findMany({
//         select: {
//             id: true,
//             number: true,
//             disciplines: {
//                 select: {
//                     id: true,
//                     name: true,
//                     term: true,
//                     teacherDisciplines: {
//                         select: {
//                             id: true,
//                             discipline: { select: {
//                                 id: true,
//                                 name:true,
//                                 teacherDisciplines: true,
//                                 term: true
//                             } },
//                             teacher: { select: { id: true, name: true } },
//                             tests: { select: { 
//                                 id: true,
//                                 name: true,
//                                 pdfUrl: true,
//                                 category: true,
//                              }},
//                         },
//                     },
//                 },
//             },
//         },
//     });
// };

const testsRepository = {
    insertTest,
    getAllTests
};

export default testsRepository;