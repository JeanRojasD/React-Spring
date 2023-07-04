import { useEffect, useState } from 'react'

import './modalForm.scss'

import { User } from '~types/user.types'
import { instance } from '~api/instance'
import { postUsers } from '~api/postUsers.api'
import { getUsers } from '~api/getUsers.api'

type ModalProps = {
    isOpen: boolean
    isEditing: boolean
    initialUsers: User[]
    onClose: (requestMessage: string, updatedUsers: User[]) => void
    completedRequest: (users: User[]) => void
    selectedUser: User | null
}

export const ModalForm: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    initialUsers,
    isEditing,
    selectedUser,
    completedRequest
}) => {
    const modalStyle = {
        display: isOpen ? 'flex' : 'none'
    }

    const [user, setUser] = useState<User>({
        id: 0,
        name: '',
        code: '',
        birthDay: ''
    })

    useEffect(() => {
        // Atualiza o estado do usuário quando isEditing ou selectedUser mudarem

        if (isEditing && selectedUser) {
            setUser(selectedUser)
        } else {
            setUser({
                id: 0,
                name: '',
                code: '',
                birthDay: ''
            })
        }
    }, [isEditing, selectedUser])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!isOpen) {
            return
        }

        try {
            // Lida com a submissão do formulário
            console.log(user)
            if (isEditing && selectedUser) {
                // Atualiza os dados do usuário
                await instance.put(`/users/${selectedUser.id}`, user)
            } else {
                // Cria um novo usuário
                await postUsers(user)
            }

            // Obtém os usuários atualizados
            const { data } = await getUsers()

            // Chama as funções de fechamento do modal e atualização dos usuários
            onClose(
                isEditing
                    ? 'Usuário editado com sucesso'
                    : 'Usuário cadastrado com sucesso',

                data
            )
            completedRequest(data)
        } catch (error) {
            console.error('Erro ao cadastrar o usuário:', error)

            // Lida com o erro na criação ou edição do usuário
            onClose(
                'Erro ao cadastrar o usuário! Por favor verifique as informações',
                initialUsers
            )
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        // Atualiza o estado do usuário com base no campo alterado
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    return (
        <div className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h2>
                    {isEditing ? 'Edição de Usuário' : 'Cadastro de Usuário'}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className='labels'>
                        <label>Nome</label>
                        <input
                            required
                            type='text'
                            name='name'
                            value={user.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='min-label'>
                        <div className='labels'>
                            <label>Código</label>
                            <input
                                required
                                type='text'
                                name='code'
                                value={user.code}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='labels'>
                            <label>Data de Nascimento</label>
                            <input
                                required
                                type='date'
                                name='birthDay'
                                value={user.birthDay}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='labels'>
                        <label htmlFor='imagem'>Imagem</label>
                        <input className='image-up' type='file' id='imagem' />
                    </div>
                    <div className='interactive-button'>
                        <button
                            className='close'
                            onClick={() => onClose('', initialUsers)}
                        >
                            Cancelar
                        </button>
                        <button className='confirm' type='submit'>
                            {isEditing ? 'Editar' : 'Confirmar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
