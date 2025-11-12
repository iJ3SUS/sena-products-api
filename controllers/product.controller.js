import DB from '../utils/db.js'
import { productSchema, productUpdateSchema } from '../schemas/product.schema.js'

export const browse = async (req, reply) => {

    const products = await DB('products').select()
    
    return reply.send(products)
}

export const show = async (req, reply) => {
    
    const { id } = req.params

    const product = await DB('products').select().where({ id }).first()

    if(!product) {
        return reply.status(404).send({
            message: 'Resource not found'
        })
    }
    
    return reply.send(product)
}

export const create = async (req, reply) => {

    const { error, value } = productSchema.validate(req.body ?? {})
    
    if (error) {
        return reply.status(422).send({
            message: 'Datos requeridos',
            errors: error.details
        })
    }

    const { name, description, price } = value

    const [id] = await DB('products').insert({ name, description, price })

    return reply.send({ id })
}

export const update = async (req, reply) => {

    const { id } = req.params

    const product = await DB('products').select().where({ id }).first()

    if(!product) {
        return reply.status(404).send({
            message: 'Resource not found'
        })
    }

    const { error, value } = productUpdateSchema.validate(req.body)
    
    if (error) {
        return reply.status(422).send({
            message: 'Datos requeridos',
            errors: error.details
        })
    }

    await DB('products').update(value).where({ id })

    return reply.send({ id })
}

export const remove = async (req, reply) => {

    const { id } = req.params

    const product = await DB('products').select().where({ id }).first()

    if(!product) {
        return reply.status(404).send({
            message: 'Resource not found'
        })
    }

    await DB('products').delete().where({ id })

    return reply.send({ id })
}
