
import bcrypt from 'bcrypt'

export const hash = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
}

export const compare = async (password, hash) => {
    const match = await bcrypt.compare(password, hash)
    return match
}
