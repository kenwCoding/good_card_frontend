import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FLASH_CARDS_MOCK_DATA } from '../utils/flashCardsMockData'
import { CardItem, CardFunctionButton } from '../components';
import { Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddBoxIcon from '@mui/icons-material/AddBox';

// NOTE - Card page based on the card set selection
// NOTE - card set >>> card >>> feature and its overview
// NOTE - Route shoule be link up with the card sset
function OverviewSection() {
    const COUNT_KEY = ['Total', 'Learned', 'Starred']
    const countSwitch = (countKey) => {
        switch (countKey) {
            case 'Total': return FLASH_CARDS_MOCK_DATA.length;
            case 'Learned': return FLASH_CARDS_MOCK_DATA.map(datum => datum.tag.filter(datumTag => datumTag == 'Learned')).flat().length
            case 'Starred': return FLASH_CARDS_MOCK_DATA.map(datum => datum.tag.filter(datumTag => datumTag == 'Starred')).flat().length
            default: break
        }
    }
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
            {COUNT_KEY.map((countKey) => {
                return (
                    <Button
                        key={countKey}
                        disableRipple={true}
                        variant="raised"
                        onClick={() => { window.location.assign(`/${countKey.toLowerCase()}`) }}
                        sx={{
                            ":hover": {
                                bgcolor: 'white'
                            },
                            p: 1,
                            m: 'auto',
                            marginBottom: '20px',
                            borderRadius: '10px',
                            width: '100px',
                            color: 'purple',
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}>
                        <Grid>
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
                    </Button>
                )
            })}
        </Grid>
    )
}

function ChangeStudyOptionsSettingAndAddNewCards() {
    return (
        <Grid container direction="row" flexDirection='row-reverse' justifyContent="space-between" alignItems="center">
            <Grid sx={{
                paddingTop: '80px',
                color: 'purple',
            }}>
                <Button
                    variant="raised"
                    disableRipple={true}
                    sx={{
                        ':hover': {
                            bgcolor: 'transparent'
                        }
                    }}>
                    <MoreVertIcon />
                </Button>
                <Button
                    variant="raised"
                    disableRipple={true}
                    sx={{
                        ':hover': {
                            bgcolor: 'transparent'
                        }
                    }}>
                    <AddBoxIcon />
                </Button>
            </Grid>
        </Grid >
    )
}

function Cards() {
    const url = new URL(window.location.href)
    const cardSetKey = url.searchParams.get('cardsets')

    return (
        <div>
            <ChangeStudyOptionsSettingAndAddNewCards />
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