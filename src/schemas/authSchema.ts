import Joi from "joi";
import { CreateUserData } from "../services/authService.js";

export const userSchema = Joi.object<CreateUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });