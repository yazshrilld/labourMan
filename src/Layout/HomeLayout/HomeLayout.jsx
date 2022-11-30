import React from 'react'
import Grid from '@mui/material/Grid'
import SideBar from '../SideBar/SideBar'
import MainContent from '../Main/MainContent'
import Container from '../Container/Container'
import Header from '../Header/Header'
import RightBar from '../RightBar/RightBar'

const HomeLayout = ({ children }) => {
  return (
    <>
        <Header />
        <Grid container
          sx={{
            width: '94%',
            m: 'auto'
            // mx: 6,
            // ml: 6,
          }}
        >
          <SideBar />
          <MainContent>{children}</MainContent>
          <RightBar />
        </Grid>
    </>
  )
}

export default HomeLayout