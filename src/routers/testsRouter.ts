import { Router } from "express";
import verifyToken from "../middlewares/tokenMiddleware.js";
import { createTest } from "../controllers/testsController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { testSchema } from "../schemas/testSchema.js";
const testsRouter = Router();

testsRouter.use(verifyToken);
testsRouter.post("/tests", validateSchemaMiddleware(testSchema), createTest)

export default testsRouter;