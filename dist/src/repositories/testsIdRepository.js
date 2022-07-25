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
function findCategoryByName(categoryName) {
    return __awaiter(this, void 0, void 0, function* () {
        const category = yield prisma.category.findFirst({
            where: {
                name: categoryName
            }
        });
        return category.id;
    });
}
;
function findDisciplineByName(disciplineName) {
    return __awaiter(this, void 0, void 0, function* () {
        const discipline = yield prisma.discipline.findFirst({
            where: {
                name: disciplineName
            }
        });
        return discipline.id;
    });
}
;
function findTeacherByName(teacherName) {
    return __awaiter(this, void 0, void 0, function* () {
        const teacher = yield prisma.teacher.findFirst({
            where: {
                name: teacherName
            }
        });
        return teacher.id;
    });
}
;
function findTeacherDisciplineId(teacherId, disciplineId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("REPOO-line 41", teacherId, disciplineId);
        const teacherDiscipline = yield prisma.teacherDiscipline.findFirst({
            where: {
                teacherId,
                disciplineId
            }
        });
        console.log("REPOO-line 47", teacherDiscipline);
        return teacherDiscipline.id;
    });
}
;
const testsIdRepository = {
    insertTest,
    findCategoryByName,
    findDisciplineByName,
    findTeacherByName,
    findTeacherDisciplineId
};
export default testsIdRepository;
