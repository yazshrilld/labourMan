import React from 'react'
import Container from '../../Layout/Container/Container'
import Grid from '@mui/material/Grid'
import Header from '../../Layout/Header/Header'
import Search from '../../components/Search/Search'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Stack } from '@mui/material'
import image from "../../assets/images/image_solve.jpg"
import SearchWithIcon from '../../components/Search/SearchWithIcon'



const SearchLabour = () => {
  return (
    <>
    <div className=' bg-slate-100'>
        <Header />
            <Container className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-1 items-center relative">
                <div className=''>
                    <Box className=''>
                        <Stack className='absolute top-[120px] left-[190px]'>
                            <div className='text-4xl'>
                                <p>
                                Chidi we are not here to put 
                                </p>
                                <p>
                                 put a smile on your face
                                </p>
                            </div>
                            <div className='absolute top-[200px] left-[0px]'>
                                <SearchWithIcon />
                            </div>
                        </Stack>
                    </Box>
                </div>
                <div className="min-h-[90vh] flex items-center">
                <img src={image} alt="login" className="w-[65%] h-[70vh] mx-auto" />
            </div>
            </Container>
    </div>
    </>
  )
}

export default SearchLabour