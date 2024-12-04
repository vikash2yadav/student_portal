import { Button } from '@mui/material'
import React from 'react'

const Buttonn = ({ sx, title, startIcon, type, className, variant, color, onClick}) => {
    return (
        <>
            <Button startIcon={startIcon} sx={sx} className={className} type={type} variant={variant} color={color} onClick={onClick}>
                {title}
            </Button>
        </>
    )
}

export default Buttonn
