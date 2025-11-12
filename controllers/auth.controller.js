import DB from '../utils/db.js'
import { compare } from '../utils/hash.js'
import { sign } from '../utils/jwt.js'
import { loginSchema } from '../schemas/auth.schema.js'

export const login = async (req, reply) => {
    try {

        const { error, value } = loginSchema.validate(req.body ?? {})

        if (error) {
            return reply.status(400).send({
                message: 'Datos inválidos',
                errors: error.details
            })
        }

        const { email, password } = value

        const user = await DB('users').select().where({ email }).first()

        if (!user) {
            return reply.status(401).send({
                message: 'Credenciales inválidas'
            })
        }

        const isValidPassword = await compare(password, user.password)

        if (!isValidPassword) {
            return reply.status(401).send({
                message: 'Credenciales inválidas'
            })
        }

        const token = sign({ 
            id: user.id, 
            email: user.email 
        })

        return reply.send({
            message: 'Login exitoso',
            token: token
        })

    } catch (error) {

        console.error('Error en login:', error)

        return reply.status(500).send({
            error: 'Error interno del servidor'
        })
    }
}