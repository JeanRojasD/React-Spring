import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Users } from './Users'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/users' />
    },
    {
        path: 'users',
        element: <Users />
    },
    {
        path: '*',
        element: <>Page not found</>
    }
])

export const Router = () => {
    return <RouterProvider router={router} />
}