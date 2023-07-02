import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import './Users.scss'

import { ModalForm } from '~components/ModalForm'

export const Users = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
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
                        <tr>
                            <td className='user-table'>
                                <div className='img-simulation'></div>
                                Claudio
                            </td>
                            <td className='align-center'>120391203912</td>
                            <td className='icons-align'>06/07/2002</td>
                            <td className='icons-align'>edit remove</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ModalForm isOpen={isModalOpen} onClose={closeModal} />
            <Outlet />
        </div>
    )
}
