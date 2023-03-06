import React, { useState } from 'react'
import { Box } from '@mui/system';
import { IconButton, Toolbar, AppBar, Typography, Button, Stack } from '@mui/material'
import { Mail, Notifications, DarkMode, Menu, Settings, GppGood } from '@mui/icons-material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import { GoodCardDrawer } from './GoodCardDrawer';

//TODO - responsive/ different layout on navbar >>> mobile, middle, web
//TODO - search bar on navbar(topBar)

//NOTE - FINISH: Drawer implementation @2023-02-08
//               persistent drawer for wider&temp for small screen @2023-02-08
//               linkage based on item clicked @2023-02-08
//               click iconButton link to that route @2023-02-08

const getIconButton = (button, badgeContent, badgeColor) => {
  switch (button) {
    case 'ChangeMode': return <DarkMode />
    case 'Mails': return <Badge badgeContent={badgeContent} color={badgeColor}><Mail /></Badge>
    case 'Notifications': return <Badge badgeContent={badgeContent} color={badgeColor}><Notifications /></Badge>
    case 'AccountCircle': return <AccountCircle />
    case 'Settings': return <Settings />
    default: break;
  }
}
const IconButtonBuilder = (props) => {
  const { size = 'large', edge = 'end', color = 'inherit', handler, badgeContent, badgeColor = 'error', button, alias } = props
  return <IconButton
    size={size}
    edge={edge}
    aria-label={props["aria-label"]}
    aria-haspopup={props["aria-haspopup"]}
    color={color}
    onClick={() => { window.location.assign(`/${alias}`) }}>
    {getIconButton(button, badgeContent, badgeColor)}
  </IconButton>
}

const featureButtonHandler = (button) => {
  switch (button) {
    case 'ChangeMode': return <IconButtonBuilder alias='mode' button={button} color='inherit' aria-label="change mode" aria-haspopup='true' />
    case 'Mails': return <IconButtonBuilder button={button} alias='mails' aria-label="show 4 new mails" aria-haspopup='true' badgeContent='4' />
    case 'Notifications': return <IconButtonBuilder button={button} alias='notifications' aria-label='show 17 new notifications' aria-haspopup='true' badgeContent='17' />
    case 'AccountCircle': return <IconButtonBuilder button={button} alias='account' aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="false" />
    case 'Settings': return <IconButtonBuilder button={button} alias='settings' color='inherit' aria-label="settings" aria-haspopup='true' />
    default: return <Button color='inherit'>{button}</Button>
  }
}

export const Navbar = ({ drawerIsOpen = null, setDrawerIsOpen = () => { } }) => {
  const featureButtons = ["ChangeMode", "Mails", "Notifications", "AccountCircle", 'Settings']
  const drawerWidth = '240px'
  console.log(window.innerWidth > 600 ? `calc(100% - ${drawerWidth} px)` : '100%')
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          overflowX: 'hidden',
          width: { sm: `calc(100 % - ${drawerWidth} px)` },
          ml: { sm: `${drawerWidth} px` },
        }}
      >
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => { setDrawerIsOpen(true) }}>
            <Menu style={{ paddingRight: '15px' }} />
          </IconButton>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => { window.location.assign('/') }}>
            <GppGood />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} onClick={() => { window.location.assign('/') }}>
            <span style={{ cursor: 'pointer' }}>GOODCARD</span>
          </Typography>
          <Stack direction='row' spacing={2}>
            {featureButtons.map((button) => <div key={button}>{featureButtonHandler(button)}</div>)}
          </Stack>
        </Toolbar>
        <GoodCardDrawer drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
      </AppBar>
    </Box >
  )
}
