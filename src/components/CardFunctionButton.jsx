import { Button, Grid } from '@mui/material'
import React from 'react'

const cardFunctions = [
    {
        functionName: 'Browse',
        to: '/browse',
        backgroundColor: '#FCEDC5',
    },
    {
        functionName: 'Game',
        to: '/game',
        backgroundColor: '#FCDEE2',
    },
    {
        functionName: 'Listen',
        to: '/listen',
        backgroundColor: '#FBD9C2',
    },
    {
        functionName: 'Test',
        to: '/test',
        backgroundColor: '#B9ACCD',
    },
]

function CardFunctionButton() {
    return (
        <div>
            <Grid container direction="row" alignItems="center" justifyContent="space-between">
                {cardFunctions.map((datum, index) => {
                    return (
                        <Grid item key={index}>
                            <Button
                                key={index}
                                disableRipple={true}
                                variant="raised"
                                sx={{
                                    ":hover": {
                                        bgcolor: datum.backgroundColor,
                                    },
                                    borderRadius: '10px',
                                    paddingTop: '10px',
                                    marginTop: '100px',
                                    marginBottom: '20px',
                                    height: '100px',
                                    backgroundColor: datum.backgroundColor,
                                    color: 'purple',
                                    width: '80px'
                                }}>
                                <div>
                                    <strong>{datum.functionName}</strong>
                                    <div>
                                        <img
                                            src={`../../src/assets/images/card_${datum.functionName.toLowerCase()}.png`}
                                            height={'60px'}
                                            width={'50px'} />
                                    </div>
                                </div>
                            </Button>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export { CardFunctionButton }