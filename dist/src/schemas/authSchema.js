import Joi from "joi";
export const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    // confirmPassword: Joi.ref("password")
});
//FrontEnd is not sending confirmPassword in signUp
