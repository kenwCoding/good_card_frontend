import React from 'react'
import { Outlet } from 'react-router'
import { Container } from '@mui/system'
import { blue } from '@mui/material/colors'
import { Navbar } from '../components'
import { useWindowSize } from '../hooks'


function RootLayout() {
  const windowSize = useWindowSize()

  const style = {
    bgcolor: blue[50],
    height: '100%',
    width: '100vw',
    minWidth: '100vw',
    margin: '0px',
    padding: '0px',
    marginLeft: windowSize.width > 600 ? '240px' : ''
  }
  return (
    <>
      <Navbar />
      <Container sx={style}>
        <Outlet />
      </Container>
    </>
  )
}

export { RootLayout }