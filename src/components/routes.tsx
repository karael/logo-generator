import React from 'react'

export default [
    {
        exact: false,
        path: '*',
        component: React.lazy(() => import('./views/notFound'))
    }
]