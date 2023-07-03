import { instance } from './instance'

export async function removeUsers(userId: number): Promise<void> {
    try {
        await instance.delete(`/users/${userId}`)
        console.log('Usuário removido com sucesso')
    } catch (error) {
        throw new Error('Erro ao remover o usuário')
    }
}
