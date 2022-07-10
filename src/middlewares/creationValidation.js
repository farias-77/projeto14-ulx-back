import creationSchema  from "../schemas/creationSchema.js";
function creationValidation(req, res, next) {
    const validation = creationSchema.validate(req.body);
    if (validation.error) {
        return res.status(422).send(validation.error.details[0].message);
    }

    
    return next();
}

export default creationValidation;
