const Joi = require("joi");

const veterinaryPracticeSchema = Joi.object({
  PracticeName: Joi.string().required(),
  Location: Joi.string().required(),
  Street: Joi.string().required(),
});

const veterinaryPracticeUpdateSchema = Joi.object({
  PracticeName: Joi.string(),
  Location: Joi.string(),
  Street: Joi.string(),
}).min(1);

module.exports = {
  veterinaryPracticeSchema,
  veterinaryPracticeUpdateSchema,
};
