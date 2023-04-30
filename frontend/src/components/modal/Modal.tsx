import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useEffect} from "react";
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    alignItems: 'center',
    textAlign: 'center',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalWindow = ({movieId, pRef, wL}) => {
    const [open, setOpen] = React.useState(false);
    const currentUser = getCurrentUser();

    useEffect(() => {
        setOpen(true)
    }, [])

    const handleClose = () => setOpen(false);

    const handleStartFromScratch = async (e: any) => {
        e.preventDefault();
        await axiosRequest.put(`user/startMovie/${currentUser._id}`, {movieId: movieId})
        await pRef.current.seekTo(0, "seconds")
        handleClose()
    }

    const handleResume = async (e: any) => {
        e.preventDefault();
        await axiosRequest.put(`user/resumeMovie/${currentUser._id}`, {movieId: movieId})
        let test = wL && (wL.timeStopped / 60)
        const timeToStart: number = Math.floor(test) * 60;
        pRef.current.seekTo(timeToStart, "seconds");
        handleClose()
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Хотите ли продолжить просмотр с места где вы остановились?
                    </Typography>
                    <Button
                        sx={{marginRight: '40px', marginTop: '40px'}}
                        variant="outlined"
                        onClick={handleStartFromScratch}
                    >
                        Начать сначала
                    </Button>
                    <Button
                        sx={{marginTop: '40px'}}
                        variant="outlined"
                        onClick={handleResume}
                    >
                        Продолжить с места остановки: {(wL.timeStopped / 60).toFixed(2)}
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalWindow;