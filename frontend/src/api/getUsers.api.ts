import { User } from '~types/user.types'
import { instance } from './instance'

type GetUsersResponse = User[]

export async function getUsers() {
    try {
        return await instance.get<GetUsersResponse>('/users')
    } catch (error) {
        throw new Error('Erro ao listar usuários')
    }
}
