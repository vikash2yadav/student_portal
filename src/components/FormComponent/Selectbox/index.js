import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const Selectbox = ({ value, label, handleChange, option }) => {
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {
                        option?.map((item) => (
                            <MenuItem value={item?.value}>{item?.title}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    )
}

export default Selectbox
