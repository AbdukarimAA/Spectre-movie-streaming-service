import React, {useEffect} from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddCardIcon from '@mui/icons-material/AddCard';
import SettingsIcon from '@mui/icons-material/Settings';
import QuizIcon from '@mui/icons-material/Quiz';
import './UserPage.scss';
import {getCurrentUser} from "../../utils/getCurrentUser/getToken";
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/redux-hook";
import {authSelector} from "../../store/slices/authSlice/selectors";
import {getOneUser} from "../../store/slices/authSlice/authSlice";

const UserPage = () => {
    const {user}: any = useAppSelector(authSelector)
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        const getOneUserFunc: any = () => {
            dispatch<any>(getOneUser({userId: id}))
        }

        getOneUserFunc();
    }, [id])
    return (
        <div className='user-page'>
            { user.user &&
                <div className="user-page-edit">
                <div className="user-page-edit-left">
                    <div className="user-page-edit-left-top">
                        <span className='user-page-edit-left-top-span'>Profile</span>
                        <span className='user-page-edit-left-top-bottom-span'>Main Profile</span>
                    </div>
                    <div className="user-page-edit-left-bottom">
                        <div className="user-page-edit-left-bottom-email">
                            <EmailIcon/>
                            <span className='user-page-edit-left-bottom-top-span'>{user.user.email}</span>
                        </div>
                        <div className="user-page-edit-left-bottom-phone">
                            <PhoneAndroidIcon/>
                            <span className='user-page-edit-left-bottom-span'>+{user.user.phone}</span>
                        </div>
                    </div>
                </div>
                    { <Link to={`/user/edit/${id}`}>
                        <div className="user-page-edit-right">
                            <span>
                                Edit profile
                            </span>
                        </div>
                    </Link>}
            </div>}

            <div className="user-page-profile-block">
                <div className="user-page-profile-block-left">
                    <span>Subscriptions</span>
                    <span>Purchase a subs</span>
                </div>
                <div className="user-page-profile-block-middle">
                    <span>Certificates and promo codes</span>
                    <span>Activate</span>
                </div>
                <div className="user-page-profile-block-right">
                    <span>Account</span>
                    <span>0$</span>
                </div>
            </div>

            <div className="user-page-config-block">
                {<Link to={`/likedMovies/${id}`} className='link'>
                    <div className="user-page-config-block-favorite">
                        <WatchLaterIcon/>
                        <span>Watch Later</span>
                    </div>
                </Link>}
                <div className="user-page-config-block-watch-later">
                    <AccountBalanceWalletIcon />
                    <span>Purchases</span>
                </div>
                <div className="user-page-config-block-watch-later">
                    <AddCardIcon />
                    <span>Payment method</span>
                </div>
                <div className="user-page-config-block-watch-later">
                    <SettingsIcon />
                    <span>Settings</span>
                </div>
                <div className="user-page-config-block-watch-later">
                    <QuizIcon />
                    <span>Call center</span>
                </div>
            </div>

            <div className="user-page-logout">

            </div>
        </div>
    );
};

export default UserPage;