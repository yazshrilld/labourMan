import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import Container from '../Container/Container';

const MainContent = ({children}) => {
  const { pathname } = useLocation();

  const title = pathname.slice(1);

  return (
    <>
      <>
        <Grid
          item
          xs={8}
          sx={{
            bgcolor: 'lightGreen',
            height: '100vh',
            px: { xs: 2, lg: '1.875rem' },
            py: '1.5rem',
          }}
        >
          <Link to=''>
            MainContent
          </Link>
        </Grid>
      </>
    </>
  )
}

export default MainContent