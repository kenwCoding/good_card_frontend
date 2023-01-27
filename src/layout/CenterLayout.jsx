import React from 'react'
import { Container } from '@mui/system'

const style = {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

function CenterLayout(props) {
  return (
    <Container className='hi' sx={style}>
      {props.children}
    </Container>
  )
}

export { CenterLayout }