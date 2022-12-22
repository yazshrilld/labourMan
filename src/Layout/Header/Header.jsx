import React from 'react'

import logo from "../../assets/images/logo2.png"
import  styles from "./styles.modules.css"
import { NavLink, useNavigate } from 'react-router-dom'

import avatar from "../../assets/images/dummy-avatar.jpg";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';




const Header = () => {

    const navigate = useNavigate();

    const onLogClick = () => {
        const bread = "sweet";
        console.log(bread)
        if(bread === "sweet") {
          navigate("/home")
        }
      }

  return (
    <>
        <nav className=''>
            <div className="mx-[10rem] h-[60px] flex items-center justify-between dark:focus:border-t-blue-400 focus:border-t-blue-400 peer">
                    <div className='flex items-center mr-6'>
                        <span className='flex items-center'>
                            <div>
                                <p><b>LABOUR</b></p>
                                <p className='text-fuchsia-500'><b>MAN</b></p>
                            </div>
                        </span>
                    </div>
                    <div className='flex items-center m-2 justify evenly gap-10'>
                        <div className='mr-3'>
                            <NavLink
                                to=""
                                className=""
                            >
                                About
                            </NavLink>
                        </div>
                        <div className='mr-3 flex justify-between items-center gap-1'>
                            <div>
                                <NavLink
                                to=""
                                className=""
                            >
                                Services Types
                                </NavLink>
                            </div>
                            <div>
                                <img src={logo} alt="bugoverflow" className='h-[10px]'/>
                            </div>
                        </div>
                        <div className='mr-3'>
                            <NavLink
                                to=""
                                className=""
                            >
                                Mail
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to=""
                                className=""
                            >
                                Contact Us
                            </NavLink>
                        </div>
                    
                </div>
                <div className='mt-5'>
                    <Box className='flex justify-between items-center'>
                        <Stack
                            direction='row'
                            className='gap-5 mx-2.5'
                        >
                            <NavLink
                                to=""
                                className="mt-2"
                            >
                                Sign Up
                            </NavLink>
                            <Button
                                className='bg-fuchsia-600'
                                variant='contained'
                                size='small'
                                sx={{
                                mb: '2rem',
                                px: '1.5rem',
                                py: '0.5rem',
                                bgcolor: '#F600ce',
                                // ml: '12.5rem'
                                }}
                                onClick={onLogClick}
                            >
                                Login
                            </Button>
                        </Stack>
                    </Box>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header