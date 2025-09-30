import joi from '../utils/joi.js'

export const productSchema = joi.object({
    name: joi.string().max(100).required(),
    description: joi.string().optional(),
    price: joi.number().positive().precision(2).required()
})

export const productUpdateSchema = joi.object({
    name: joi.string().max(100).optional(),
    description: joi.string().optional(),
    price: joi.number().positive().precision(2).optional()
})