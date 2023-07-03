import { useEffect, useState } from 'react'

import './ModalForm.scss'

import { User } from '~types/user.types'
import { instance } from '~api/instance'
import { postUsers } from '~api/postUsers.api'

type ModalProps = {
    isOpen: boolean
    isEditing: boolean
    onClose: () => void
    selectedUser: User | null
}

export const ModalForm: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    isEditing,
    selectedUser
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
            console.log(user)
            if (isEditing && selectedUser) {
                await instance.put(`/users/${selectedUser.id}`, user)
            } else {
                postUsers(user)
            }
            onClose()
            window.location.reload()
        } catch (error) {
            console.error('Erro ao cadastrar o usuário:', error)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    return (
        <div className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h2>Cadastro de Usuário</h2>
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
                        <button className='close' onClick={onClose}>
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
