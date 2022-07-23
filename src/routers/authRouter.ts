import { Router } from "express";
import { userSignUp, userSignIn } from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { userSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.use(validateSchemaMiddleware(userSchema));
authRouter.post("/sign-up", userSignUp);
authRouter.post("/sign-in", userSignIn);

export default authRouter;

