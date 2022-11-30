import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, useLocation } from 'react-router-dom';
import Container from '../Container/Container';

const RightBar = () => {
  return (
    <>
        <Grid
            item
            xs={2.5}
            sx={{
            bgcolor: 'lightgray',
            height: '100vh',
            px: { xs: 2, lg: '1.875rem' },
            py: '1.5rem',
            }}
        >
            <Link to=''>
            RightBar
            </Link>
        </Grid>
    </>
  )
}

export default RightBar