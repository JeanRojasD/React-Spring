import { useState } from 'react'

import './ModalForm.scss'

import { User } from '~types/user.types'
import { instance } from '~api/instance'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
}

export const ModalForm: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalStyle = {
        display: isOpen ? 'flex' : 'none'
    }

    const [users, setUsers] = useState<User>({
        id: 0,
        name: '',
        code: '',
        birthDay: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            console.log(users)
            await instance.post('/users', users)
            onClose()
            window.location.reload()
        } catch (error) {
            console.error('Erro ao cadastrar o usuário:', error)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setUsers((prevUser) => ({
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
                            type='text'
                            name='name'
                            value={users.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='min-label'>
                        <div className='labels'>
                            <label>Código</label>
                            <input
                                type='text'
                                name='code'
                                value={users.code}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='labels'>
                            <label>Data de Nascimento</label>
                            <input
                                type='text'
                                name='birthDay'
                                value={users.birthDay}
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
                            Confirmar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
