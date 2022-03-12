import React , {useState} from 'react';
import { Tooltip , makeStyles , Fab , TextField , Button , Snackbar} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TransitionsModal from './ApModal';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme)=>({
    absolute:{
        
    },
    addBtnIcon:{
        position:'fixed',
        bottom:10,
        right:20,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ApAdd = () =>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const [state, setState] = useState({
        open: true,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, openAlert } = state;

    const handleClick = (newState) => () => {
        setState({ openAlert: true, ...newState });
    };

    const handleCloseState = () => {
        setState({ ...state, openAlert: false });
    };

    const handleOpen = () => {
        console.log('handleOpen');
        setOpen(true);
    };

    const handleClose = () => {
        console.log('handleClose');
        setOpen(false);
    };
    return (
        <>
        <Tooltip title="Add" aria-label="add" className={classes.addBtnIcon} onClick={handleOpen}>
            <Fab color="primary" className={classes.absolute}>
                <AddIcon />
            </Fab>
        </Tooltip>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open} style={{width:'400px'}}>
                <div className={classes.paper}>

                    <div>
                        <TextField
                            id="standard-full-width"
                            label="Title"
                            style={{ margin: 8 }}
                            placeholder="Title"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    
                    <div>
                    <TextField
                        label="Description"
                        style={{ margin: 8 }}
                        placeholder="Description"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </div>

                    <div style={{marginTop:'8px'}}>
                        <Button variant="outlined" color="primary" style={{marginRight:'4px'}}>Save</Button>
                        <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>Canel</Button>
                    </div>
                </div>
            </Fade>
        </Modal>
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={openAlert}
            onClose={handleCloseState}
            message="I love snacks"
            key={vertical + horizontal}
            />
        </>
    )
}

export default ApAdd;