import joi from "joi";
const creationSchema = joi.object({
    email: joi.string().email().required(),
    url: joi.string().required(),
    name: joi.string().required(),
    description: joi.string().required(),
    category: joi.string().required(),
    price: joi.number().required()
});

export default creationSchema;
