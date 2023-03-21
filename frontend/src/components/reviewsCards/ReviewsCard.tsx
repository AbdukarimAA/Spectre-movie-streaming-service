import React, {useState} from 'react';
import './ReviewsCard.scss';
import {Box, Button, Modal, Typography} from "@mui/material";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 970,
    bgcolor: '#1b1a1d',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'white'
};


const ReviewsCard = ({review}: any) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='reviews-card'>
            <div className="reviews-card-container">
                <div className="reviews-card-div">

                    <div className="reviews-name-date">
                        <div className="reviews-n-d">
                            <span className='review-name-span'>{review.userName}</span>
                            <span className='review-date-span'>{review.date}</span>
                        </div>
                        <div className="reviews-rating">
                            <span>{review.rating}</span>
                        </div>
                    </div>

                    <div className="reviews-text-div">
                        <span className='reviews-text-span'>
                            <b>
                                {review.reviewTitle}
                            </b>
                        </span>
                        <br/>
                        <Button onClick={handleOpen} sx={{fontSize: 16}}>Read review</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography sx={{fontSize: 24}}>
                                    {review.userName}
                                    <Button sx={{fontSize: 18, backgroundColor: '#008B8B', ml: 3, color: 'white'}}>{review.rating}</Button>
                                </Typography>
                                <Typography sx={{mb: 3, color: '#008B8B'}}>
                                    {review.date}
                                </Typography>
                                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mb: 3}}>
                                    {review.reviewTitle}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {review.review}
                                </Typography>
                            </Box>
                        </Modal>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;