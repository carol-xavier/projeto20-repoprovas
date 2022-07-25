var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import testsIdRepository from '../repositories/testsIdRepository.js';
import testsRepository from '../repositories/testsRepository.js';
function insertTest(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const { categoryId, teacherDisciplineId } = yield verifyTestData(data);
        const { name, pdfUrl } = data;
        return yield testsRepository.insertTest({ name, pdfUrl, categoryId, teacherDisciplineId });
    });
}
;
function verifyTestData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const categoryId = yield getCategoryId(data.category);
        const disciplineId = yield getDisciplineId(data.discipline);
        const teacherId = yield getTeacherId(data.teacher);
        const teacherDisciplineId = yield getTeacherDisciplineId(teacherId, disciplineId);
        return { categoryId, teacherDisciplineId };
    });
}
;
function getTestsGroupedByTeacher() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield testsRepository.getAllTestsByTeacher();
    });
}
function getTestsGroupedByDisciplines() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield testsRepository.getAllTestsByDiscipline();
    });
}
;
const testsService = {
    insertTest,
    getTestsGroupedByTeacher,
    getTestsGroupedByDisciplines
};
export default testsService;
function getCategoryId(categoryName) {
    return __awaiter(this, void 0, void 0, function* () {
        const category = yield testsIdRepository.findCategoryByName(categoryName);
        if (!category)
            throw { type: "not found" };
        return category;
    });
}
;
function getDisciplineId(disciplineName) {
    return __awaiter(this, void 0, void 0, function* () {
        const discipline = yield testsIdRepository.findDisciplineByName(disciplineName);
        if (!discipline)
            throw { type: "not found" };
        return discipline;
    });
}
;
function getTeacherId(teacherName) {
    return __awaiter(this, void 0, void 0, function* () {
        const teacher = yield testsIdRepository.findTeacherByName(teacherName);
        if (!teacher)
            throw { type: "not found" };
        return teacher;
    });
}
;
function getTeacherDisciplineId(teacherId, disciplineId) {
    return __awaiter(this, void 0, void 0, function* () {
        const teacherDiscipline = yield testsIdRepository.findTeacherDisciplineId(teacherId, disciplineId);
        if (!teacherDiscipline)
            throw { type: "not found" };
        return teacherDiscipline;
    });
}
;
