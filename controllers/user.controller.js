import DB from '../utils/db.js'
import { userSchema, userUpdateSchema } from '../schemas/user.schema.js'
import { hash } from '../utils/hash.js'

export const browse = async (req, reply) => {

    const users = await DB('users').select()
    
    return reply.send(users)
}

export const show = async (req, reply) => {
    
    const { id } = req.params

    const user = await DB('users').select().where({ id }).first()

    if(!user) {
        return reply.status(404).send({
            message: 'Resource not found'
        })
    }
    
    return reply.send(user)
}

export const create = async (req, reply) => {

    const { error, value } = userSchema.validate(req.body)
    
    if (error) {
        return reply.status(400).send({
            message: 'Validation error',
            details: error.details
        })
    }

    const { email, password } = value

    const existingUser = await DB('users').select().where({ email }).first()
    
    if (existingUser) {
        return reply.status(400).send({
            message: 'Email already exists'
        })
    }

    const hashedPassword = await hash(password)

    const [id] = await DB('users').insert({ email, password: hashedPassword })

    return reply.send({ 
        message: "User created successfully",
        resource_id: id
    })
    
}

export const update = async (req, reply) => {

    const { id } = req.params

    const { error, value } =  userUpdateSchema.validate(req.body ?? {})
    
    if (error) {
        return reply.status(400).send({
            message: 'Validation error',
            details: error.details
        })
    }
    
    const { email } = value

    const existingUser = await DB('users').select().where({ email }).whereNot({ id }).first()
    
    if (existingUser) {
        return reply.status(400).send({
            message: 'Email already exists'
        })
    }

    await DB('users').update(value).where({ id })

    return reply.send({ 
        message: "User updated successfully",
        id 
    })
  
}

export const remove = async (req, reply) => {

    const { id } = req.params

    await DB('users').delete().where({ id })

    return reply.send({ id })
    
}

export const me = async (req, reply) => {

    const { user } = req

    return reply.send(user)
    
}