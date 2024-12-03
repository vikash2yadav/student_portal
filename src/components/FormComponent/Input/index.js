import { TextField } from '@mui/material';
import React from 'react'

const Input = ({ label, name }) => {
    return (
        <>
            <TextField label={label} name={name} />
        </>
    )
}

export default Input;