import { Button, Grid } from '@mui/material'
import React from 'react'

// NOTE: based on card set, so after click the feature-buttons/ overview-buttons, the url should be /<CARD_SET>/<FEATURES> or /<CARD_SET>/<OVERVIEWS>
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
            <Grid container direction="row" alignItems="center" justifyContent="space-between" p="0">
                {cardFunctions.map((datum, index) => {
                    return (
                        <Grid item key={index}>
                            <Button
                                onClick={() => { window.location.assign(`${datum.to}`) }}
                                key={index}
                                disableRipple={true}
                                variant="raised"
                                sx={{
                                    ":hover": {
                                        bgcolor: datum.backgroundColor,
                                    },
                                    borderRadius: '10px',
                                    paddingTop: '10px',
                                    m: 2,
                                    height: '100px',
                                    backgroundColor: datum.backgroundColor,
                                    color: 'purple',
                                    width: '80px'
                                }}>
                                <div style={{ marginTop: '10px' }}>
                                    <strong>{datum.functionName}</strong>
                                    <div>
                                        <img
                                            src={`../../src/assets/images/card_${datum.functionName.toLowerCase()}.png`}
                                            height={'60px'}
                                            width={'50px'}
                                            style={{ marginTop: '3px' }}
                                        />
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