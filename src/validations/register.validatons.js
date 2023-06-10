import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z ]*$/, "name must be in alphabets only")
    .required("name field is required"),
  number: yup
    .string()
    .min(10, "Phone number must be of 10 digits")
    .max(10, "Phone number must be of 10 digits")
    .required("phone number field is required"),
  email: yup.string().email().required("Email is required field"),
  password: yup
    .string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("password is required field"),
});
