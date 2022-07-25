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
function findTeacherById(teacherId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.teacher.findFirst({
            where: { id: teacherId }
        });
    });
}
;
function findDisciplineById(disciplineId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.discipline.findFirst({
            where: { id: disciplineId }
        });
    });
}
function findCategoryById(categoryId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.category.findFirst({
            where: { id: categoryId }
        });
    });
}
;
function findTermById(termId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.term.findFirst({
            where: { id: termId }
        });
    });
}
;
const testsNamesRepository = {
    findTeacherById,
    findDisciplineById,
    findCategoryById,
    findTermById
};
export default testsNamesRepository;
