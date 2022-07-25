var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prisma from '../config/database.js';
export function insertTest(testData) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.test.create({
            data: testData
        });
    });
}
;
export function getAllTestsByTeacher() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.teacherDiscipline.findMany({
            select: {
                id: true,
                discipline: { include: { teacherDisciplines: true, term: true } },
                teacher: true,
                tests: { select: {
                        id: true,
                        name: true,
                        pdfUrl: true,
                        category: true,
                    } },
            }
        });
    });
}
;
export function getAllTestsByDiscipline() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.term.findMany({
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
                                discipline: { select: { id: true, name: true } },
                                teacher: { select: { id: true, name: true } },
                                tests: { select: {
                                        id: true,
                                        name: true,
                                        pdfUrl: true,
                                        category: true,
                                    } },
                            },
                        },
                    },
                },
            },
        });
    });
}
;
const testsRepository = {
    insertTest,
    getAllTestsByTeacher,
    getAllTestsByDiscipline
};
export default testsRepository;
