import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@mui/icons-material";
import "./AdminUserEdit.scss";
import SideBar from "../../../adminComponents/sideBar/SideBar";
import {useAppDispatch, useAppSelector} from "../../../../store/redux-hook";
import {authSelector} from "../../../../store/slices/authSlice/selectors";
import {deleteUser, getOneUser, updateUser} from "../../../../store/slices/authSlice/authSlice";
import {IUserRegister} from "../../../../utils/types/userRegisterType";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const AdminUserEdit = () => {
    const [userInfo, setUserInfo] = useState<IUserRegister | null>()
    const {user}: any = useAppSelector(authSelector)
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getOneUserFunc: any = () => {
            dispatch<any>(getOneUser({userId: id}))
        }

        getOneUserFunc();
    }, [id])

    const handleUpdateUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo((prev: IUserRegister) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        // e.preventDefault()
        try {
            await dispatch<any>(updateUser({...userInfo, _id: id}))
        } catch (e) {
            console.log(e)
        }
    }

    const handleDelete = async () => {
        console.log(id)
        await dispatch<any>(deleteUser({id}))
        navigate('/admin/users')
    }

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
                        <form onSubmit={handleSubmit} className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                    <label>Username</label>
                                    <input
                                        onChange={handleUpdateUser}
                                        type="text"
                                        name='username'
                                        // placeholder="annabeck99"
                                        placeholder={user.user.username}
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Email</label>
                                    <input
                                        onChange={handleUpdateUser}
                                        type="text"
                                        name='email'
                                        // placeholder="annabeck99@gmail.com"
                                        placeholder={user.user.email}
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Phone</label>
                                    <input
                                        onChange={handleUpdateUser}
                                        type="text"
                                        name='phone'
                                        // placeholder="+1 123 456 67"
                                        placeholder={user.user.phone}
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Age</label>
                                    <input
                                        onChange={handleUpdateUser}
                                        type="text"
                                        name='age'
                                        // placeholder="New York | USA"
                                        placeholder={user.user.age}
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
                                <DeleteOutlineIcon
                                    className="userListDelete"
                                    onClick={() => handleDelete()}
                                />
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};