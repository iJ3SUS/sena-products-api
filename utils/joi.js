import Joi from 'joi'

const _joi = Joi.defaults((schema) => schema.messages({
    'any.required': 'Campo obligatorio.',
    'any.invalid': 'Campo obligatorio.',
    'string.empty': 'Campo obligatorio.',
    'string.base': 'Debe ser texto.',
    'string.email': 'Email inválido.',
    'string.min': 'Mínimo {{#limit}} caracteres.',
    'string.max': 'Máximo {{#limit}} caracteres.',
    'number.base': 'Debe ser número.',
    'number.min': 'Mínimo {{#limit}}.',
    'number.max': 'Máximo {{#limit}}.',
    'boolean.base': 'Debe ser verdadero o falso.',
    'array.length': 'Debe tener {{#limit}} elementos.',
}))

export default _joi