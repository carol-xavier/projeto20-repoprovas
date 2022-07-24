import { Router } from "express";
import verifyToken from "../middlewares/tokenMiddleware.js";
import { createTest, getTests } from "../controllers/testController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { testSchema } from "../schemas/testSchema.js";
const testRouter = Router();

testRouter.use(verifyToken);
testRouter.post("/tests", validateSchemaMiddleware(testSchema), createTest);
testRouter.get("/tests", getTests);

export default testRouter;