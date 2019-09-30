import * as yup from 'yup';

const signupValidation = yup.object().shape({
  username: yup
    .string()
    .required()
    .trim('space is invalid'),
  email: yup
    .string()
    .email('E-mail is not valid!')
    .required('E-mail is required!')
    .trim('space is invalid'),
  password: yup
    .string()
    .min(10, 'Password has to be longer than 10 characters')
    .matches(/(?=.*[0-9])/, 'Password must contain a number')
    .required('Password is required!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});

export default signupValidation;
