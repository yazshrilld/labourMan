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
import logos from "../../assets/images/logo.jpg"



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
      iconCount: (
        <div>
            <img src={logo} alt="bugoverflow" className='h-[11px]'/>
        </div>
      ),
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
      iconCounts: (
        <div>
            <img src={logos} alt="bugoverflow" className='h-[14px]'/>
        </div>
      ),
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
      className='bg-blue-50 border rounded-tr-3xl'
        item
        // xs={1.5}
        sx={{
          position: 'sticky',
          top: 0,
          // bgcolor: '',
          height: '100vh',
          width: '7.5%',
          px: { xs: 2, lg: '1.875rem' },
          py: '1.5rem',
        }}
      >
        <Box mt=''>
          {
            pageNavigation.map((data) => (
              <Box 
                key={data.icon}
                alignItems='center'
                className='mb-6 flex'>
                <p className='pr-3 -mt-1 p-2 bg-white'>{data.icon}</p>
                <p className='absolute top-[18px] left-[65px]'>{data.iconCount}</p>
                <p className='absolute top-[75px] left-[65px]'>{data.iconCounts}</p>
                {/* {data.name}  */}
              
              </Box>
            ))
          }
        </Box>
      </Grid>
    </>
  )
}

export default SideBar