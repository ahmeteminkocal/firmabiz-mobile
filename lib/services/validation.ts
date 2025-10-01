import * as yup from 'yup';

const emailField = yup.string().email("Invalid email").required("Email is required");
const passwordField = yup.string().min(6, "Password must be at least 6 chars").required("Password is required");
const codeField = yup.string().length(6, "Fill in the code").required("Fill in the code");
 // -----------------------------
const loginSchema = yup.object({
  email: emailField,
  password: passwordField,
}).required();

const verifySchema = yup.object({
  code: codeField,
}).required();

const emailSchema = yup.object({
  email: emailField,
}).required();

const resetPasswordSchema = yup.object({
  password: passwordField,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
}).required();

export { emailSchema, loginSchema, resetPasswordSchema as resestPasswordSchema, verifySchema };

