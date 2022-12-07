import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import Container from '../Container/Container';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const MainContent = ({children}) => {
  const { pathname } = useLocation();

  const title = pathname.slice(1);

  return (
    <>
      <>
        <Grid className='bg-blue-50'
          item
          // xs={8}
          sx={{
            // bgcolor: '#4b5563',
            height: '100vh',
            width: '67%',
            px: { xs: 2, lg: '1.875rem' },
            py: '1.5rem',
          }}
        >
          <Box 
            alignItems='center'
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Box className='text-3xl'>
              All Questions
              <Stack
                direction='column'
                className='flex items-center'
              >
                <Typography>
                  Tagged with
                </Typography>
                <span className=''>
                  <Button
                    variant='contained'
                    size='small'
                    mt='5rem'
                  >
                    Abc
                  </Button>
                  <Button
                    variant='contained'
                    size='small'
                  >
                    Def
                  </Button>
                  <Button
                    variant='contained'
                    size='small'
                  >
                    Abc
                  </Button>
                  
                </span>
                <div>
                  Total Amount
                </div>
              </Stack>
            </Box> 
            <Box>
              <Button
                variant='contained'
                size='small'
                sx={{
                  mb: '2rem',
                  // ml: '12.5rem'
                }}
              >
                Question
              </Button>
              <Stack
                direction='row'
                className='flex items-center'
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                      m: 1,
                    },
                  }}
                >
                  <Stack
                    direction='column'
                    className='flex items-center m-0'
                  >
                    <ButtonGroup>
                    <Button
                     sx={{
                      pr: '2rem',
                      pl: '2rem',
                      pt: '0.4rem',
                      pb: '0.3rem',
                    }}
                    >
                      Abc
                    </Button>
                    <Button
                      sx={{
                        pr: '2rem',
                        pl: '2rem',
                        pt: '0.4rem',
                        pb: '0.4rem',
                      }}
                    >
                      Abc
                    </Button>
                    <Button
                      sx={{
                        pr: '2rem',
                        pl: '2rem',
                        pt: '0.4rem',
                        pb: '0.4rem',
                      }} 
                    >
                      Abc
                    </Button>
                  </ButtonGroup>
                  <Button
                    variant='outlined'
                  >
                    Filter
                  </Button>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </>
    </>
  )
}

export default MainContent