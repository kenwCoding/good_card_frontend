import React from 'react';
import { Grid } from '@mui/material'
import { CenterLayout } from '../layout'
import { FLASH_CARDS_MOCK_DATA } from '../utils/flashCardsMockData'
import { makeStyles } from '@material-ui/styles';
import { CardItem, CardFunctionButton } from '../components';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    }
})

function OverviewSection() {
    return (
        <div>
            <strong
                style={{
                    color: 'purple',
                    margin: '20px'
                }}>
                Overview</strong>
        </div>
    )
}

function Cards() {
    const classes = useStyles()
    return (
        <CenterLayout>
            <div>
                <CardFunctionButton />
                <OverviewSection />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className={classes.gridContainer}>
                    {FLASH_CARDS_MOCK_DATA.map((datum, index) => {
                        return (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <CardItem datum={datum} index={index} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </CenterLayout>
    );
}

export { Cards }