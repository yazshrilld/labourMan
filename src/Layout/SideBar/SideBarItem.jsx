import { Typography } from '@mui/material'
import { fontWeight } from '@mui/system'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SideBarItem = ({name, icon, iconCount, href}) => {

  const {pathname} = useLocation()

  return (
    <>
      <Link
        to={href}
        className='sideBar-item'
      >
      {icon} {iconCount}
      <Typography
        className='sideBar-item-description'
      >
        sx={{
          color: pathname.includes(href) ? 'red' : 'blue',
          fontWeight: pathname.includes(href) ? {xs: 500, lg: 600} : 400
        }}
        {name}
      </Typography>
      </Link>
    </>
  )
}

export default SideBarItem