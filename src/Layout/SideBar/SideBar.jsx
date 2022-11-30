import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, useLocation } from 'react-router-dom';
import Container from '../Container/Container';


const SideBar = () => {

  const { pathname } = useLocation()
  return (
    <>
      <Grid
        item
        xs={1.5}
        sx={{
          position: 'sticky',
          top: 0,
          bgcolor: 'lightBlue',
          height: '100vh',
          px: { xs: 2, lg: '1.875rem' },
          py: '1.5rem',
        }}
      >
        <Link to=''>
          SideBar
        </Link>
      </Grid>
    </>
  )
}

export default SideBar