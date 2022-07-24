import Joi from "joi";
import { CreateUserData } from "../utils/types.js";

export const userSchema = Joi.object<CreateUserData>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    // confirmPassword: Joi.ref("password")
  });

  //FrontEnd is not sending confirmPassword in signUp