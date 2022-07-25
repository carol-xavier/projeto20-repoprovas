var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import testsService from "../services/testService.js";
export function createTest(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        yield testsService.insertTest(data);
        res.status(201).send("Your test was posted!");
    });
}
;
export function getTests(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { groupBy } = req.query;
        if (groupBy === "teachers") {
            const tests = yield getTestsByTeachers();
            return res.send({ tests });
        }
        ;
        if (groupBy === "disciplines") {
            const tests = yield getTestsByDisciplines();
            return res.send({ tests });
        }
        ;
    });
}
;
function getTestsByTeachers() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield testsService.getTestsGroupedByTeacher();
    });
}
;
function getTestsByDisciplines() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield testsService.getTestsGroupedByDisciplines();
    });
}
;
