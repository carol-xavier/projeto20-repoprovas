import Joi from "joi";
import { CreateTestData } from "../utils/types.js";

export const testSchema = Joi.object<CreateTestData>({
    name: Joi.string().required(),
    pdfUrl: Joi.string().uri().required(),
    category: Joi.string().required(),
    discipline: Joi.string().required(),
    teacher: Joi.string().required(),
});