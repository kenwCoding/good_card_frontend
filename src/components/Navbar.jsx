import React from 'react'
import { IconButton, Toolbar, AppBar, Typography, Button, Stack } from '@mui/material'
import { CatchingPokemon, Mail, Notifications } from '@mui/icons-material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import { GppGood } from '@mui/icons-material';
//TODO - add handler >>> open drawer when clicking profile icon
//TODO - add handler >>> click iconButton link to that route 
//TODO - responsive/ different layout on navbar >>> mobile, middle, web

const getIconButton = (button, badgeContent, badgeColor) => {
  switch (button) {
    case 'Mails': return <Badge badgeContent={badgeContent} color={badgeColor}><Mail /></Badge>
    case 'Notifications': return <Badge badgeContent={badgeContent} color={badgeColor}><Notifications /></Badge>
    case 'AccountCircle': return <AccountCircle />
    default: break;
  }
}
const IconButtonBuilder = (props) => {  // aria-controls={menuId} // onClick={handleProfileMenuOpen}
  const { size = 'large', edge = 'end', color = 'inherit', handler, badgeContent, badgeColor = 'error', button } = props
  return <IconButton size={size} edge={edge} aria-label={props["aria-label"]} aria-haspopup={props["aria-haspopup"]} color={color}>
    {getIconButton(button, badgeContent, badgeColor)}
  </IconButton>
}

export const Navbar = () => {
  const featureButtons = ["Add Cards", "Saved Cards", "About", "Mails", "Notifications", "AccountCircle"]
  const featureButtonHandler = (button) => {
    switch (button) {
      case 'Add Cards':
      case 'Saved Cards':
      case 'About': return <Button color='inherit'>{button}</Button>
      case 'Mails': return <IconButtonBuilder button={button} aria-label="show 4 new mails" aria-haspopup='true' badgeContent='4' />
      case 'Notifications': return <IconButtonBuilder button={button} aria-label='show 17 new notifications' aria-haspopup='true' badgeContent='17' />
      case 'AccountCircle': return <IconButtonBuilder button={button} aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="false" />
      default: return <Button color='inherit'>{button}</Button>
    }
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <GppGood />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>GOODCARD</Typography>
        <Stack direction='row' spacing={2}>
          {featureButtons.map((button) => <div>{featureButtonHandler(button)}</div>)}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
