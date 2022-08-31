import joi from "joi";

const compareUsersSchema = joi.object({
  firstUser: joi.string().required(),
  secondUser: joi.string().required(),
});

export default compareUsersSchema;
