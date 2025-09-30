import joi from '../utils/joi.js'

export const userSchema = joi.object({
    email: joi.string().email().max(100).required(),
    password: joi.string().min(6).max(255).required()
})

export const userUpdateSchema = joi.object({
    email: joi.string().email().max(100).optional()
})
