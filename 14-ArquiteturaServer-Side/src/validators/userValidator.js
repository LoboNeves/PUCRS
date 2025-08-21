const Joi = require("joi");

const createSchema = Joi.object({
    name: Joi.string().min(1).max(120).required(),
    email: Joi.string().email().required(),
});

const updateSchema = Joi.object({
    name: Joi.string().min(1).max(120).optional(),
    email: Joi.string().email().optional(),
});

function validate(schema) {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { stripUknown: true, convert: true });
        if (error) return res.status(400).json({ error: error.details.map((e) => e.message).join(", ") });
        req.body = value;
        next();
    };
}

module.exports = {
    validateCreate: validate(createSchema),
    validateUpdate: validate(updateSchema),
};