import React from 'react'
import { Toaster } from 'sonner'

const Toast = () => {
    return (
        <Toaster
            position="bottom-right"
            expand={false}
            richColors
            offset={50}
        />
    )
}

export default Toast
