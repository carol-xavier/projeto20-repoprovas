import { Router } from "express";
import verifyToken from "../middlewares/tokenMiddleware.js";
import { createTest } from "../controllers/testsController.js";
const testsRouter = Router();

testsRouter.use(verifyToken);
testsRouter.post("/tests", createTest)

export default testsRouter;