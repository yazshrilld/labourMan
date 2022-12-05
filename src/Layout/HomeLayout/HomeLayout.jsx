import React from 'react'
import Grid from '@mui/material/Grid'
import SideBar from '../SideBar/SideBar'
import MainContent from '../Main/MainContent'
import Container from '../Container/Container'
import Header from '../Header/Header'
import RightBar from '../RightBar/RightBar'
import Divider from '@mui/material/Divider';


const HomeLayout = ({ children }) => {
  return (
    <>
        <Header />
        <Grid
          sx={{
            display: 'flex',
            width: '94%',
            // bgcolor: 'lightblue',
            m: 'auto',
            gap: 0.5
            // mx: 6,
            // ml: 6,
            }}
        >
          <SideBar />
          <MainContent>{children}</MainContent>
            <Divider></Divider>
          <RightBar />
        </Grid>
    </>
  )
}

export default HomeLayout