import React from 'react'
import { Outlet } from 'react-router'
import { Container } from '@mui/system'
import { blue } from '@mui/material/colors'

const style = {
  bgcolor: blue[50],
  height: '100vh',
  width: '100vw',
  maxWidth: '100vw !important'
}

function RootLayout() {
  return (
    <Container sx={style}>
      <Outlet />
    </Container>
  )
}

export { RootLayout }