import React from 'react'
import { Container } from '@mui/system'

const style = {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100vw !important',
  minWidth: '100vw !important'

}

function CenterLayout(props) {
  return (
    <Container className='hi' sx={style}>
      {props.children}
    </Container>
  )
}

export { CenterLayout }