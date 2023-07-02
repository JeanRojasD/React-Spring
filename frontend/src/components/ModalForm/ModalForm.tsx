import './ModalForm.scss'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
}

const ModalForm: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalStyle = {
        display: isOpen ? 'flex' : 'none'
    }

    return (
        <div className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h2>Cadastro de Usuário</h2>
                <div className='labels'>
                    <label>Nome</label>
                    <input type='text' id='name' />
                </div>
                <div className='min-label'>
                    <div className='labels'>
                        <label>Código</label>
                        <input type='text' id='code' />
                    </div>
                    <div className='labels'>
                        <label>Data de Nascimento</label>
                        <input type='text' id='birthDay' />
                    </div>
                </div>
                <div className='labels'>
                    <label htmlFor='imagem'>Imagem</label>
                    <input className="image-up" type='file' id='imagem' />
                </div>
                <div className='interactive-button'>
                    <button className='close' onClick={onClose}>
                        Cancelar
                    </button>
                    <button className='confirm'>Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalForm
