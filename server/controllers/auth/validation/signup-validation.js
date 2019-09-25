const yup = require('yup');

const signupSchema = yup.object().shape({
  username: yup.string().max(30).min(2).required,

  password: yup.string()
    .matches(/^[a-zA-Z0-9]{8,30}$/)
    .required(),
  email: yup.string()
    .email({ minDomainSegments: 2 })
    .required(),
  native_lang_id: yup.number(),
  learning_lang_id: yup.number(),
});

module.exports = { signupSchema }
;