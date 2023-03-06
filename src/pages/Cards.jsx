import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FLASH_CARDS_MOCK_DATA } from '../utils/flashCardsMockData'
import { CardItem, CardFunctionButton } from '../components';

function OverviewSection() {
    const COUNT_KEY = ['Total', 'Learned', 'Starred']
    const countSwitch = (countKey) => {
        switch (countKey) {
            case 'Total': return FLASH_CARDS_MOCK_DATA.length
            case 'Learned': return FLASH_CARDS_MOCK_DATA.map(datum => {
                datum.tag.filter(datumTag => { datumTag !== 'Learned' })
            }).length
            case 'Starred': return FLASH_CARDS_MOCK_DATA.map(datum => {
                datum.tag.filter(datumTag => { datumTag !== 'Learned' })
            }).length
            default: break
        }
    }

    return (
        <Grid container sx={{ marginBottom: '20px' }}>
            {COUNT_KEY.map((countKey) => {
                return (
                    <Paper
                        key={countKey}
                        sx={{
                            p: 2,
                            m: 'auto',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            maxWidth: 500,
                            width: 'auto',
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}>
                        <Grid item xs={4} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {countSwitch(countKey)}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                        {countKey}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                )
            })}
        </Grid>
    )
}

function Cards() {
    return (
        <div>
            <CardFunctionButton />
            <OverviewSection />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {FLASH_CARDS_MOCK_DATA.map((datum, index) => {
                    return (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <CardItem datum={datum} index={index} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export { Cards }