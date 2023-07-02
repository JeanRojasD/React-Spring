import './users.scss'

const Users = () => {
    return (
        <div className='content-all'>
            <div className='header-content'>Jean's Project</div>
            <table className='table-container'>
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>Codigo</th>
                        <th>Editar</th>
                        <th>Remover</th>
                    </tr>
                    <tr>
                        <td>
                            <img></img>
                            Claudio
                        </td>
                        <td>120391203912</td>
                        <td className='icons-align'>edit</td>
                        <td className='icons-align'>remove</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Users;
