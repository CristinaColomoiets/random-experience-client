import React from 'react'
import { Toaster } from 'sonner'

const Toast = () => {
    return (
        <Toaster
            position="top-right"
            expand={false}
            richColors
            offset={50}
        />
    )
}

export default Toast
