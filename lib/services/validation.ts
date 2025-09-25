import * as yup from 'yup';

const emailSchema = yup.string().email("Invalid email").required("Email is required");
const passwordSchema = yup.string().min(6, "Password must be at least 6 chars").required("Password is required");
const codeSchema = yup.string().length(6, "Fill in the code").required("Fill in the code");
 // -----------------------------
const loginSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
}).required();

const verifySchema = yup.object({
  code: codeSchema,
}).required();

export { loginSchema, verifySchema }