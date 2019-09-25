const Joi = require('@hapi/joi');

const signupSchema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),

  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{8,30}$/)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
});

exports.signupValidation = (userData) => Joi.validate(userData, signupSchema);
