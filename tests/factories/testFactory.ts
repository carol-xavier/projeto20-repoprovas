import { faker } from '@faker-js/faker';

const testName = faker.word.noun();
const pdfUrl = faker.internet.url();
const teacher:string = "Diego Pinho";
const category:string = "Prática";

function createWrongTest() {
    return {
        "name": testName,
        "pdfUrl": pdfUrl,
        "category": category,
        "discipline": "JavaScript",
    };
};

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
    createTest,
    createWrongTest
};

export default testFactory;