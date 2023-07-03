import { User } from '~types/user.types'
import { instance } from './instance'

export async function postUsers(user: User): Promise<void> {
    try {
        await instance.post('/users', user)
        console.log('Usuário cadastrado com sucesso')
    } catch (error) {
        throw new Error('Erro ao cadastrar o usuário')
    }
}
