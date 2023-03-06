import { Button } from '@mui/material'
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
        <div style={{ minHeight: '150px' }}>
            {cardFunctions.map((datum, index) => {
                return (
                    <Button
                        key={index}
                        variant='contained'
                        sx={{
                            borderRadius: '5px',
                            paddingTop: '10px',
                            marginTop: '100px',
                            marginBottom: '20px',
                            marginLeft: '20px',
                            height: '100px',
                            backgroundColor: datum.backgroundColor,
                            color: 'purple',
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
                )
            })}
        </div >
    )
}

export { CardFunctionButton }