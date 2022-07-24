import { faker } from '@faker-js/faker';

const testName = faker.word.noun();
const pdfUrl = faker.internet.url();
const teacher:string = "Diego Pinho";
const category:string = "Prática";

// const categoryId = faker.datatype.number({ min: 1, max: 3 });
// const teacherId = faker.datatype.number({ min: 1, max: 2 });
// const disciplineId = faker.datatype.number({ min: 1, max: 6 });
// let teacherDisciplineId: number;

function createTest() {
    return {
        "name": testName,
        "pdfUrl": pdfUrl,
        "category": category,
        "discipline": "JavaScript",
        "teacher": teacher
    };
};

const testFactory = {
    createTest
};

export default testFactory;