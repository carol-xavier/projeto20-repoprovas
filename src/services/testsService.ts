import { CreateTestData } from '../utils/types.js';
import testsRepository from '../repositories/testsRepository.js';

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

async function getCategoryId(categoryName: string) {
    const category: number = await testsRepository.findCategoryByName(categoryName);
    if (!category) throw {type: "not found"};
  
    return category;
};

async function getDisciplineId(disciplineName: string) {
    const discipline: number = await testsRepository.findDisciplineByName(disciplineName);
    if (!discipline) throw {type: "not found"};
  
    return discipline;
};

async function getTeacherId(teacherName: string) {
    const teacher: number = await testsRepository.findTeacherByName(teacherName);
    if (!teacher) throw {type: "not found"};
  
    return teacher;
};

async function getTeacherDisciplineId(teacherId: number, disciplineId: number) {
    const teacherDiscipline: number = await testsRepository.findTeacherDisciplineId(teacherId, disciplineId);
    if (!teacherDiscipline) throw {type: "not found"};
  
    return teacherDiscipline;
};

const testsService = {
    insertTest
};

export default testsService;