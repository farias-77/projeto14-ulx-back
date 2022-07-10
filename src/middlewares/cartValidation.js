import cartSchema  from "../schemas/cartSchema.js";
function cartValidation(req, res, next) {
    const validation = cartSchema.validate(req.headers);
    if (validation.error) {
        return res.status(422).send(validation.error.details[0].message);
    }

    
    return next();
}

export default cartValidation;
