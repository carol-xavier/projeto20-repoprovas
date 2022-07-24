import prisma from '../config/database.js';

async function findTeacherById(teacherId) {
    return await prisma.teacher.findFirst({
        where: {id: teacherId}
    });
};

async function findDisciplineById(disciplineId) {    
    return await prisma.discipline.findFirst({
        where: {id: disciplineId}
    });
}
async function findCategoryById(categoryId) {
    return await prisma.category.findFirst({
        where: {id: categoryId}
    });
};

async function findTermById(termId) {
    return await prisma.term.findFirst({
        where: {id: termId}
    });
};

const testsNamesRepository = {
    findTeacherById,
    findDisciplineById,
    findCategoryById,
    findTermById
};

export default testsNamesRepository;