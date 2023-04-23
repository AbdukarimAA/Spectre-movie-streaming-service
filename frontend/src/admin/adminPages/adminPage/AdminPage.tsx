import React from 'react';
import './AdminPage.scss';
import SideBar from "../../adminComponents/sideBar/SideBar";
import AdminUserPage from "../AdminUser/adminUserPage/AdminUserPage";
import {WidgetSm} from "../../adminComponents/adminHomeWidgetSM/WidgetSM";
import {WidgetLg} from "../../adminComponents/adminHomeWidgetLG/WidgetLG";

const AdminPage = () => {
    return (
        <div className='admin-page'>
            <SideBar />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
};

export default AdminPage;