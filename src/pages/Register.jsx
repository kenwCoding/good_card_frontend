import { Button, TextField, Typography } from '@mui/material'
import { fontFamily } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CenterLayout } from '../layout'

function Register() {
  // stepper, usseForm, customHook
  // send password and username to auth
  const userRegistrationLabels = ["Name", "Email Address", "Password"]
  const navigate = useNavigate()

  const navigateToLogin = () => {
    navigate('/login')
  }
  return (
    <div> // TODO: button background color
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
          <Button variant='contained' style={{ marginTop: '10px' }}>Sign Up</Button>
          <div style={{ marginTop: '20px', paddingTop: '2px' }}>
            Already a member?
            <Button
              variant="text"
              onClick={navigateToLogin}>Login</Button>
          </div>
        </Typography>

      </CenterLayout>

    </div >
  )
}

export { Register }