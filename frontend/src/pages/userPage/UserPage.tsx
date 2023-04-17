import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddCardIcon from '@mui/icons-material/AddCard';
import SettingsIcon from '@mui/icons-material/Settings';
import QuizIcon from '@mui/icons-material/Quiz';
import './UserPage.scss';

const UserPage = () => {
    return (
        <div className='user-page'>
            <div className="user-page-edit">
                <div className="user-page-edit-left">
                    <div className="user-page-edit-left-top">
                        <span className='user-page-edit-left-top-span'>Profile</span>
                        <span className='user-page-edit-left-top-bottom-span'>Main Profile</span>
                    </div>
                    <div className="user-page-edit-left-bottom">
                        <div className="user-page-edit-left-bottom-email">
                            <EmailIcon />
                            <span className='user-page-edit-left-bottom-top-span'>Admin@gmail.com</span>
                        </div>
                        <div className="user-page-edit-left-bottom-phone">
                            <PhoneAndroidIcon />
                            <span className='user-page-edit-left-bottom-span'>+7 950 314-04-31</span>
                        </div>
                    </div>
                </div>
                <div className="user-page-edit-right">
                    <span>
                        Edit profile
                    </span>
                </div>
            </div>

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
                <div className="user-page-config-block-watch-later">
                    <WatchLaterIcon />
                    <span>Watch Later</span>
                </div>
                <div className="user-page-config-block-purchases">
                    <AccountBalanceWalletIcon />
                    <span>Purchases</span>
                </div>
                <div className="user-page-config-block-payment-method">
                    <AddCardIcon />
                    <span>Payment method</span>
                </div>
                <div className="user-page-config-block-settings">
                    <SettingsIcon />
                    <span>Settings</span>
                </div>
                <div className="user-page-config-block-call-center">
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