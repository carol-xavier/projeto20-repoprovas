import { CreateTestData, TestDB } from '../utils/types.js';
import testsIdRepository from '../repositories/testsIdRepository.js';
import testsRepository from '../repositories/testsRepository.js';
import testsNamesRepository from '../utils/testsNamesRepository.js';

async function insertTest(data: CreateTestData) {
    const { categoryId, teacherDisciplineId } = await verifyTestData(data);
    const { name, pdfUrl } = data;
    return await testsRepository.insertTest({ name, pdfUrl, categoryId, teacherDisciplineId });
};

async function verifyTestData(data: CreateTestData) {
    const categoryId = await getCategoryId(data.category);
    const disciplineId = await getDisciplineId(data.discipline);
    const teacherId = await getTeacherId(data.teacher);
    const teacherDisciplineId = await getTeacherDisciplineId(teacherId, disciplineId);
    return { categoryId, teacherDisciplineId };
};

async function getTestsGroupedByDisciplines() {
    const tests = await testsRepository.getAllTests();
    const organizedList = await organizeListByDiscipline(tests);
    // const testList = await Promise.all(tests.map(async (test) => await groupTestsByDiscipline(test)));
    return tests;
};

// async function groupTestsByDiscipline(test) {
//     const teacher = await testsNamesRepository.findTeacherById(test.teacherDiscipline.teacherId);
//     const discipline = await testsNamesRepository.findDisciplineById(test.teacherDiscipline.disciplineId)
//     const category = await testsNamesRepository.findCategoryById(test.categoryId);
//     const term = await testsNamesRepository.findTermById(discipline.termId);

//     return {
//         discipline: discipline.name,
//         term: term.number,
//         category: category.name,
//         testName: test.name,
//         teacher: teacher.name
//     }
// }

const testsService = {
    insertTest,
    getTestsGroupedByDisciplines
};

export default testsService;

async function organizeListByDiscipline(tests) {
    
};

async function getCategoryId(categoryName: string) {
    const category: number = await testsIdRepository.findCategoryByName(categoryName);
    if (!category) throw { type: "not found" };

    return category;
};

async function getDisciplineId(disciplineName: string) {
    const discipline: number = await testsIdRepository.findDisciplineByName(disciplineName);
    if (!discipline) throw { type: "not found" };

    return discipline;
};

async function getTeacherId(teacherName: string) {
    const teacher: number = await testsIdRepository.findTeacherByName(teacherName);
    if (!teacher) throw { type: "not found" };

    return teacher;
};

async function getTeacherDisciplineId(teacherId: number, disciplineId: number) {
    const teacherDiscipline: number = await testsIdRepository.findTeacherDisciplineId(teacherId, disciplineId);
    if (!teacherDiscipline) throw { type: "not found" };

    return teacherDiscipline;
};