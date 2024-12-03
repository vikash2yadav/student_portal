import { Button } from '@mui/material'
import React from 'react'

const Buttonn = ({title, className, variant, color}) => {
    return (
        <>
            <Button className={className} variant={variant} color={color}>
                {title}
            </Button>
        </>
    )
}

export default Buttonn
