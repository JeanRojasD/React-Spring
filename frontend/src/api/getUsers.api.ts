import { User } from '~types/user.types'
import { instance } from './instance'

type GetUsersResponse = User[]

export async function getUsers() {
    return await instance.get<GetUsersResponse>('/users')
}
