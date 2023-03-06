import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

function CardItem(props) {
    const { datum, index } = props
    return (
        <Card style={{ width: '100%', height: '100%' }} key={index}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Software Engineer Set
                </Typography>
                <Typography variant="h5" component="div">
                    {datum.flashcardName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Noun
                </Typography>
                <Typography variant="body2">
                    {datum.meaning}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export { CardItem }