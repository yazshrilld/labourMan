import React from 'react'
import Grid from '@mui/material/Grid'
import SideBar from '../SideBar/SideBar'
import MainContent from '../Main/MainContent'
import Container from '../Container/Container'
import Header from '../Header/Header'
import Divider from '@mui/material/Divider';
import HeaderD from '../Header/Header2'
import AsideBar from '../AsideBar/AsideBar'
import EmptyBar from '../EmptyBar/EmptyBar'


const DashBoard = ({ children }) => {
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
          <AsideBar />
          <MainContent>{children}</MainContent>
            <Divider></Divider>
          {/* <EmptyBar /> */}
        </Grid>
    </>
  )
}

export default DashBoard