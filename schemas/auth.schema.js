import joi from '../utils/joi.js'

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
})