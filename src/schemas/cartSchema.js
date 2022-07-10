import joi from "joi";
const cartSchema = joi.object({
    email: joi.string().email().required()
  
});

export default cartSchema;