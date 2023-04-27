import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@mui/icons-material";
import "./AdminUserEdit.scss";
import SideBar from "../../../adminComponents/sideBar/SideBar";
import {useAppDispatch, useAppSelector} from "../../../../store/redux-hook";
import {authSelector} from "../../../../store/slices/authSlice/selectors";
import {getOneUser} from "../../../../store/slices/authSlice/authSlice";

export const AdminUserEdit = () => {
    const [updateUser, setUpdateUser] = useState<any>({
        username: '',
        email: '',
        phone: '',
        age: ''
    })
    const {user}: any = useAppSelector(authSelector)
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        const getOneUserFunc: any = () => {
            dispatch<any>(getOneUser({userId: id}))
        }

        getOneUserFunc();
    }, [id])

    console.log(user)

    return (
        <div className="user-edit-admin">
            <SideBar />
            { user.user &&
                <div className="userContainer">
                    <div className="userShow">
                        <div className="userTitleContainer">
                            <h1 className="userTitle">Edit User</h1>
                        </div>
                        <div className="userShowTop">
                            <img
                                src={user.user.img}
                                alt=""
                                className="userShowImg"
                            />
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">{user.user.username}</span>
                                <span className="userShowUserTitle">{user.user.isAdmin}</span>
                            </div>
                        </div>
                        <div className="userShowBottom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                                <PermIdentity className="userShowIcon"/>
                                <span className="userShowInfoTitle">username: {user.user.username}</span>
                            </div>
                            <div className="userShowInfo">
                                <CalendarToday className="userShowIcon"/>
                                <span className="userShowInfoTitle">age: {user.user.age}</span>
                            </div>
                            <span className="userShowTitle">Contact Details</span>
                            <div className="userShowInfo">
                                <PhoneAndroid className="userShowIcon"/>
                                <span className="userShowInfoTitle">phone: {user.user.phone}</span>
                            </div>
                            <div className="userShowInfo">
                                <MailOutline className="userShowIcon"/>
                                <span className="userShowInfoTitle">{user.user.email}</span>
                            </div>
                            <div className="userShowInfo">
                                <LocationSearching className="userShowIcon"/>
                                <span className="userShowInfoTitle">New York | USA</span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <Link to="/admin/user/newUser">
                            <button className="userAddButton">Create</button>
                        </Link>
                        <br/>
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        placeholder="annabeck99"
                                        value={user.user.username}
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        placeholder="annabeck99@gmail.com"
                                        value={user.user.email}
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        value={user.user.phone}
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Age</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        value={user.user.age}
                                        className="userUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img
                                        className="userUpdateImg"
                                        src={user.user.img}
                                        alt=""
                                    />
                                    <label htmlFor="file">
                                        <Publish className="userUpdateIcon"/>
                                    </label>
                                    <input type="file" id="file" style={{display: "none"}}/>
                                </div>
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};