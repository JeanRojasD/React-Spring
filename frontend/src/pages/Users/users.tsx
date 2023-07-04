import { useEffect, useState } from 'react'
import './users.scss'
import { ModalForm } from '~components/ModalForm'
import { User } from '~types/user.types'
import { getUsers } from '~api/getUsers.api'
import { removeUsers } from '~api/removeUsers.api'

import edit from '../../assets/img/edit.svg'
import remove from '../../assets/img/remove.svg'

export const Users = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [users, setUsers] = useState<User[]>([])
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [selectedUser, setSelectedUser] = useState<User | null>(null)
    const [requestMessage, setRequestMessage] = useState<string>('')

    useEffect(() => {
        async function fetchData() {
            const { data } = await getUsers()
            setUsers(data)
        }

        fetchData()
    }, [])

    const openModal = () => {
        setIsModalOpen(true)
        setIsEditing(false)
        setSelectedUser(null)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    // Função executada ao fechar o modal, recebendo a mensagem de requisição e os usuários atualizados
    const handleModalClose = (requestMessage: string, updatedUsers: User[]) => {
        closeModal()
        setRequestMessage(requestMessage)
        setUsers(updatedUsers)

        setTimeout(() => {
            setRequestMessage('')
        }, 3000)
    }

    // Função executada após a requisição ser concluída com sucesso, recebendo os usuários atualizados
    const completedRequest = (users: User[]) => {
        setUsers(users)
    }

    // Função executada ao editar um usuário, recebe o usuário selecionado como parâmetro
    const handleEditUser = (user: User) => {
        setSelectedUser(user)
        setIsEditing(true)
        setIsModalOpen(true)
    }

    // Função executada ao remover um usuário, recebe o ID do usuário como parâmetro
    const handleRemoveUser = async (userId: number) => {
        const confirmDelete = window.confirm(
            'Deseja mesmo remover este usuário?'
        )

        if (confirmDelete) {
            try {
                await removeUsers(userId)
                setUsers((prevUsers) =>
                    prevUsers.filter((user) => user.id !== userId)
                )
            } catch (error) {
                console.error('Erro ao remover o usuário:', error)
            }
        }
    }

    return (
        <div className='content-all'>
            <div className='header-content'>
                <p>Jean's Project</p>
            </div>
            <div className='table-container'>
                <div className='table-header'>
                    <h3>Lista de Usuários</h3>
                    <button onClick={openModal}>Cadastrar</button>
                </div>
                <table className='table'>
                    <tbody className='table-body'>
                        <tr>
                            <th className='align-left'>Nome</th>
                            <th className='align-center'>Código</th>
                            <th className='align-center'>Data de Nascimento</th>
                            <th className='align-center'>Editar / Remover</th>
                        </tr>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className='user-table'>
                                    <div className='img-simulation'></div>
                                    {user.name}
                                </td>
                                <td className='align-center'>{user.code}</td>
                                <td className='icons-align'>
                                    {new Date(user.birthDay).toLocaleDateString(
                                        'pt-BR'
                                    )}
                                </td>
                                <td className='icons-align'>
                                    <button
                                        className='icon-alt'
                                        onClick={() => handleEditUser(user)}
                                    >
                                        <img src={edit} alt='editar'></img>
                                    </button>
                                    <button
                                        className='icon-remove'
                                        onClick={() =>
                                            handleRemoveUser(user.id)
                                        }
                                    >
                                        <img src={remove} alt='remover'></img>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ModalForm
                isOpen={isModalOpen}
                onClose={handleModalClose}
                isEditing={isEditing}
                selectedUser={selectedUser}
                completedRequest={completedRequest}
                initialUsers={users}
            />
            {requestMessage && (
                <div className='request-alert'>
                    <p>{requestMessage}</p>
                </div>
            )}
        </div>
    )
}
