import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FLASH_CARDS_MOCK_DATA } from '../utils/flashCardsMockData'
import { CardItem, CardFunctionButton } from '../components';
import { Box, Button, Input, Modal, TextField } from '@mui/material';
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

function addCardHandler() {

}
function AddCardModal({ open, handleClose }) {
    return (
        <Modal open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description">
            hello
        </Modal>

    )
}
function ChangeStudyOptionsSettingAndAddNewCards({ openFlag }) {
    const [open, setOpen] = useState(openCardModel)
    const handleOpen = () => {
        openFlag(true);
    };
    const handleClose = () => {
        openFlag(false);
    };
    return (
        <Grid container direction="row" flexDirection='row-reverse' justifyContent="space-between" alignItems="center">
            <Grid sx={{
                paddingTop: '80px',
                color: 'purple',
            }}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 200 }}>
                        <h2 id="child-modal-title">Text in a child modal</h2>
                        <p id="child-modal-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                        <Button onClick={handleClose}>Close Child Modal</Button>
                    </Box>
                </Modal>
                <Button
                    onClick={handleOpen}
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
                    onClick={handleOpen}
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

const modalStyle =
{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function Cards() {
    const url = new URL(window.location.href)
    const cardSetKey = url.searchParams.get('cardsets')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [cardName, setCardName] = useState("")
    const [cardPartOfSpeech, setCardPartOfSpeech] = useState("")
    const [cardCardDefinition, setCardDefinition] = useState("")

    return (
        <div>
            <Grid container direction="row" flexDirection='row-reverse' justifyContent="space-between" alignItems="center">
                <Grid sx={{
                    paddingTop: '50px',
                    color: 'purple',
                }}>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                    >
                        <Box sx={{ ...modalStyle, width: 200 }}>
                            <h2 id="child-modal-title">Add New Card</h2>
                            <TextField
                                id="add-card-card-name"
                                label="Card-name"
                                // value={name}
                                onChange={(event) => {
                                    setCardName(event.target.value);
                                }}
                                margin="dense"
                            />
                            <TextField
                                id="add-card-card-pof"
                                label="Card-part-of-speech"
                                // value={name}
                                onChange={(event) => {
                                    setCardPartOfSpeech(event.target.value);
                                }}
                                margin="dense"
                            />

                            <TextField
                                id="add-card-card-def"
                                label="Card-definition"
                                // value={name}
                                onChange={(event) => {
                                    setCardDefinition(event.target.value);
                                }}
                                margin="dense"
                            />
                        </Box>
                    </Modal>
                    <Button
                        onClick={() => { console.log('setting') }}
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
                        onClick={handleOpen}
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
            </Grid>
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