import React from 'react'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { ReactComponent as SearchIcon } from "../../assets/images/password-off.svg"

const Search = ({value, handleChange, name, handleSubmit, placeholder}) => {
  return (
    <Box
        component="form"
        onSubmit={handleSubmit}
    >
        <TextField 
            id='search'
            type='search'
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            variant='outlined'
            sx={{width: '15rem', bgcolor: 'lightblue', borderRadius: '10px', border: 'none',
                "& .MuiInputBase-root": {
                    height: 40,
                    border: 'none'
                }}}
            InpuProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
        />
    </Box>
  )
}

export default Search