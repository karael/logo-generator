import React from 'react'

export interface Props {
    children: React.ReactNode
}

export default function RLayout ({children}: Props) {

    return (
        <div>
            {children}
        </div>
    )
}