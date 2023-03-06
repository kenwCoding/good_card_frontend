import React from 'react';
import { Grid } from '@mui/material'
import { FLASH_CARDS_MOCK_DATA } from '../utils/flashCardsMockData'
import { CardItem, CardFunctionButton } from '../components';

function OverviewSection() {
    return (
        <div>
            <div className='row'>
                <strong style={{ color: 'purple', margin: '20px' }}>Overview</strong>
            </div>
            <div className='row'><div style={{ color: 'purple', margin: '20px' }}>Total</div></div>
            <div className='row'><div style={{ color: 'purple', margin: '20px' }}>{FLASH_CARDS_MOCK_DATA.length}</div></div>
            <div style={{ color: 'purple', margin: '20px' }}>Learned</div>
            <div style={{ color: 'purple', margin: '20px' }}>
                {FLASH_CARDS_MOCK_DATA.map(datum => {
                    datum.tag.filter(datumTag => { datumTag !== 'Learned' })
                }).length}</div>
            <div style={{ color: 'purple', margin: '20px' }}>Starred</div>
            <div style={{ color: 'purple', margin: '20px' }}>
                {FLASH_CARDS_MOCK_DATA.map(datum => {
                    datum.tag.filter(datumTag => { datumTag !== 'Learned' })
                }).length}</div>
        </div>
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