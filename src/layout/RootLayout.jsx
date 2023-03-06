import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { Container } from '@mui/system'
import { blue } from '@mui/material/colors'
import { Navbar } from '../components'
import { useWindowSize } from '../hooks'

const style = {
  bgcolor: blue[50],
  height: '100%',
  width: '100vw',
  minWidth: '100vw',
  margin: '0px',
  padding: '0px',
}

function RootLayout() {
  const windowSize = useWindowSize()
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  return (
    <>
      <Navbar drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
      <Container sx={{ style, marginLeft: windowSize.width > 600 ? '240px' : '' }}>
        <Outlet />
      </Container>
    </>
  )
}

export { RootLayout }