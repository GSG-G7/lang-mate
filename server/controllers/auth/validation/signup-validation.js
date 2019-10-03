const yup = require('yup');

const signupSchema = yup.object().shape({
  username: yup.string().max(30).min(2).required(),
  password: yup.string()
    .matches(/^[a-zA-Z0-9]{6,30}$/)
    .required(),
  email: yup.string()
    .email({ minDomainSegments: 2 })
    .required(),
  nativeLangId: yup
    .number()
    .required()
    .positive()
    .integer(),
  learningLangId: yup
    .number()
    .required()
    .positive()
    .integer(),
  interestsId: yup
    .array().of(yup.number().min(1)),
});

module.exports = { signupSchema };
