import React from 'react'
import { Box, Button, Divider, Drawer, IconButton, ListItem, ListItemIcon, styled, Typography, useTheme } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { BookmarkAdd, AddCard, Book, GppGood } from '@mui/icons-material'
import { blue } from '@mui/material/colors';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: blue[50]
    ,
}));

const drawerWidth = '240px'

const drawerItems = ["Cards", "Bookmarks", "About"]

const getDrawerItemIcon = (button) => {
    switch (button) {
        case 'Cards': return <AddCard />
        case 'Bookmarks': return <BookmarkAdd />
        case 'About': return <Book />
        default:
            break;
    }
}

const StyledButton = styled(Button)`
  &:hover {
    background: none;
  }
`

export const GoodCardDrawer = ({ drawerIsOpen = null, setDrawerIsOpen = () => { } }) => {
    const theme = useTheme()

    const handleDrawerClose = () => {
        setDrawerIsOpen(!drawerIsOpen)
    }

    const DrawContent = ({ handleDrawerClose = () => { }, showArrowBackIcon = false }) => {
        return (
            <>
                <DrawerHeader>
                    <div style={{ display: 'flex', flex: '2', justifyContent: 'center' }}>
                        <IconButton size='small' edge='start' color='inherit' aria-label='logo' onClick={() => { window.location.assign('/') }}>
                            <GppGood />
                        </IconButton>
                        <Typography variant='h6' component='div' onClick={() => { window.location.assign('/') }}>
                            <span style={{ cursor: 'pointer', fontSize: '18px' }}>GOODCARD</span>
                        </Typography>
                    </div>
                    {showArrowBackIcon ? <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton> : <></>}

                </DrawerHeader>
                <Divider />
                {
                    drawerItems.map((datum) => {
                        return (
                            <ListItem key={datum}>
                                <ListItemIcon>{getDrawerItemIcon(datum)}</ListItemIcon>
                                <StyledButton
                                    onClick={() => { window.location.assign(datum.toLowerCase()) }}
                                    // onMouseEnter={() => { console.log('mouse is in') }}
                                    style={{ backgroundColor: 'transparent' }}
                                >
                                    {datum.toLowerCase()}
                                </StyledButton>
                            </ListItem>
                        )
                    })
                }
            </>
        )
    }

    return (
        <>
              {/* Fixed Drawer state for small size */}
            <Drawer
                anchor='left'
                sx={{
                    width: 0,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 0,
                        boxSizing: 'border-box',
                    },
                }}
                variant="temporary"
                open={drawerIsOpen}
                onClose={handleDrawerClose}>
                <DrawContent handleDrawerClose={handleDrawerClose} showArrowBackIcon='true' />
            </Drawer>
            
            {/* Fixed Drawer state for non-small size */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'fixed' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    paddingLeft: drawerWidth
                }}
                open>
                <DrawContent />
            </Drawer>
        </>

    )
}
