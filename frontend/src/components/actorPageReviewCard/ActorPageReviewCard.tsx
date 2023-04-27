import React, {useEffect, useState} from 'react';
import './ActorPageReviewCard.scss';
import {axiosRequest} from "../../utils/Request/newAxiosRequest";
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";

const ActorPageReviewCard = ({review}) => {
    const [user, setUser] = useState<any>('');
    const [spinner, setSpinner] = useState(false);
    const currentUser = getCurrentUser();


    useEffect(() => {
        const getUserForActorReview: any = async () => {
            const res = await axiosRequest.get("/user/getUser/" + currentUser._id)
                .then(res => setUser(res.data))
                .finally(() => setSpinner(false))
        };
        getUserForActorReview();
    }, [])

    return (
        <div className="actor-page-reviews">
            <div className="actor-page-reviews-container">
                {review && user && <div className="actor-page-reviews-container-leaved">
                    <div className="actor-page-reviews-container-leaved-top">
                        <span className='actor-page-reviews-container-leaved-top-username'>{user.email}</span>
                        <span className='actor-page-reviews-container-leaved-top-date'>{review.createdAt}</span>
                    </div>
                    <div className="actor-page-reviews-container-leaved-bottom">
                        <span>{review.review}</span>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default ActorPageReviewCard;