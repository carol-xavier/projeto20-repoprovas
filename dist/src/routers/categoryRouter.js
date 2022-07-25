import { Router } from "express";
import verifyToken from "../middlewares/tokenMiddleware.js";
import { getCategories } from "../controllers/categoryController.js";
const categoryRouter = Router();
categoryRouter.use(verifyToken);
categoryRouter.get("/categories", getCategories);
export default categoryRouter;
