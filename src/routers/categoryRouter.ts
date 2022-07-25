import { Router } from "express";
import verifyToken from "../middlewares/tokenMiddleware.js";
import { getCategories } from "../controllers/categoryController.js";

const categoryRouter = Router();

categoryRouter.get("/categories", verifyToken, getCategories);


export default categoryRouter;