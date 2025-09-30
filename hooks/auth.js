import { verify } from '../utils/jwt.js'

export const authHook = async (request, reply) => {
  if (request.url === '/login') {
    return
  }

  const token = request.headers.authorization?.replace('Bearer ', '')

  if (!token) {
    return reply.status(401).send({
      message: 'Unauthorized'
    })
  }

  try {
    const decoded = verify(token)
    request.user = decoded
  } catch (error) {
    return reply.status(401).send({
      message: 'Unauthorized'
    })
  }
}