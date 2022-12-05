import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, useLocation } from 'react-router-dom';
import Container from '../Container/Container';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PublicIcon from '@mui/icons-material/Public';
import SideBarItem from './SideBarItem';
import logo from "../../assets/images/logo2.png"


const SideBar = () => {

  const { pathname } = useLocation()

  const pageNavigation = [
    {
      name: 'Home',
      icon: (
        <HomeIcon
          style={{
            stroke: pathname.includes('home') ? '#F58220' : '#1B1B1B',
          }}
        />
      ),
      href: '/dashboard?page=1',
    },
    {
      name: 'Public',
      icon: (
        <PublicIcon
          style={{
            stroke: pathname.includes('public') ? '#F58220' : '#1B1B1B',
          }}
        />
      ),
      href: '/dashboard?page=1',
    },
    {
      name: 'Users',
      icon: (
        <PeopleAltIcon
          style={{
            stroke: pathname.includes('users') ? '#F58220' : '#1B1B1B',
          }}
        />
      ),
      href: '/dashboard?page=1',
    },
  ]

  return (
    <>
      <Grid
        item
        // xs={1.5}
        sx={{
          position: 'sticky',
          top: 0,
          bgcolor: '#f9fafb',
          height: '100vh',
          width: '12.5%',
          px: { xs: 2, lg: '1.875rem' },
          py: '1.5rem',
        }}
      >
        <Link to=''>
          <img 
            src={logo} alt="bugoverflow" className='h-[70px] bg-white'
          />
        </Link>

        <Box mt='4.5rem'>
          {
            pageNavigation.map((data) => (
              <Box 
                alignItems='center'
                className='mb-6 flex'>
                <p className='pr-3 -mt-1'>{data.icon}</p>
                {data.name} 
              </Box>
            ))
          }
        </Box>
      </Grid>
    </>
  )
}

export default SideBar