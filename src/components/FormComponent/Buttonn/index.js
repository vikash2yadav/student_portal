import { Button } from '@mui/material'
import React from 'react'

const Buttonn = ({ sx, title, type, className, variant, color, onClick}) => {
    return (
        <>
            <Button sx={sx} className={className} type={type} variant={variant} color={color} onClick={onClick}>
                {title}
            </Button>
        </>
    )
}

export default Buttonn
