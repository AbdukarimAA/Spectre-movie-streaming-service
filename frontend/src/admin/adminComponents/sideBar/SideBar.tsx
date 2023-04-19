import React from 'react';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import ReorderIcon from '@mui/icons-material/Reorder';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ReviewsIcon from '@mui/icons-material/Reviews';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";
import './SideBar.scss';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/admin" className="link">
                            <li className="sidebarListItem active">
                                <LineStyleIcon className="sidebarIcon" />
                                Home
                            </li>
                            <Link to="/admin/users" className="link">
                                <li className="sidebarListItem">
                                    <PermIdentityIcon className="sidebarIcon" />
                                    Users
                                </li>
                            </Link>
                            <Link to="/products" className="link">
                                <li className="sidebarListItem">
                                    <OndemandVideoIcon className="sidebarIcon" />
                                    Movies
                                </li>
                            </Link>
                            <li className="sidebarListItem">
                                <ReorderIcon className="sidebarIcon" />
                                Lists
                            </li>
                            <li className="sidebarListItem">
                                <GroupAddIcon className="sidebarIcon" />
                                Actors
                            </li>
                            <li className="sidebarListItem">
                                <ReviewsIcon className="sidebarIcon" />
                                Movie Reviews
                            </li>
                            <li className="sidebarListItem">
                                <CommentIcon className="sidebarIcon" />
                                Actor Reviews
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineIcon className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className="sidebarIcon" />
                            Reviews
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineIcon className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <ReportGmailerrorredIcon className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;