import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CenterLayout } from '../layout'

function Login() {
  const userRegistrationLabels = ["Email Address", "Password"]
  const navigate = useNavigate()

  const navigateToRegister = () => {
    navigate('/register')
  }
  return (
    <div>
      <CenterLayout>
        <Typography color="purple.medium" style={{ letterSpacing: '1px' }}>
          <div style={{ padding: '5px' }}><b>Welcome to Good Card!</b></div>
          <div style={{ padding: '5px' }}>Let's begin your vocabulary journey</div>
          {userRegistrationLabels.map((userRegistrationLabel, index) => {
            return (
              <div>
                <TextField
                  style={{ marginTop: '10px', paddingTop: '2px' }}
                  id="demo-helper-text-misaligned-no-helper"
                  label={userRegistrationLabel}
                  key={index}
                />
              </div>
            )
          })}
          <Button variant='contained' style={{ marginTop: '10px' }}>Login</Button>
          <div style={{ marginTop: '20px', paddingTop: '2px' }}>
            Not a member?
            <Button
              variant="text"
              onClick={navigateToRegister}>Register</Button>
          </div>
        </Typography>

      </CenterLayout>

    </div >
  )
}

export { Login }