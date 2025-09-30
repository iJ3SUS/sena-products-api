import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || '**J3SUS**TOKEN**D3V'

export const sign = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '365d' })
}

export const verify = (token) => {
    return jwt.verify(token, JWT_SECRET)
}