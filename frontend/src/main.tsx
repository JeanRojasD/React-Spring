import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Users from './pages/Users/users.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Users />
    </React.StrictMode>
)
