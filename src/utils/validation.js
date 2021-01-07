import Joi from 'joi';

export const createUserValidation = (data) => {
    const schema = Joi.object({
        displayName: Joi.string().min(4).max(16).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6).max(20).required(),
        confirmPassword: Joi.ref('password')
    });
    const { error, value } = schema.validate(data);
    if(error) {
        console.log(error);
    }
    else console.log(value);
}