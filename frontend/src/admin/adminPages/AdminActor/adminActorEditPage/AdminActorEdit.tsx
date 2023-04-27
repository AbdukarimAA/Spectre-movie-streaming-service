import React from 'react';
import './AdminActorEdit.scss';
import SideBar from "../../../adminComponents/sideBar/SideBar";
import {Link} from "react-router-dom";
import {Publish} from "@mui/icons-material";

const AdminActorEdit = () => {
    return (
        <div className="actor-edit-admin">
            <SideBar />
            <div className="actorContainer">
                <div className="actorUpdate">
                    <Link to="/newactor">
                        <button className="actorAddButton">Create</button>
                    </Link>
                    <br/>
                    <span className="actorUpdateTitle">Edit actor</span>
                    <form className="actorUpdateForm">
                        <div className="actorUpdateLeft">
                            <div className="admin-actor-left">
                                <div className="actorUpdateItem">
                                    <label>actor title</label>
                                    <input
                                        type="text"
                                        placeholder="any actor"
                                        className="actorUpdateInput"
                                    />
                                </div>
                                <div className="actorUpdateItem">
                                    <label>Short desc</label>
                                    <input
                                        type="text"
                                        placeholder="Anna Becker"
                                        className="actorUpdateInput"
                                    />
                                </div>
                                <div className="actorUpdateItem">
                                    <label>Full desc</label>
                                    <input
                                        type="text"
                                        placeholder="annabeck99@gmail.com"
                                        className="actorUpdateInput"
                                    />
                                </div>
                                <div className="actorUpdateItem">
                                    <label>duration</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="actorUpdateInput"
                                    />
                                </div>
                                <div className="actorUpdateItem">
                                    <label>typeOfactor</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="actorUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="admin-actor-info">
                                <div className="actorUpdateItem">
                                    <label>audioLyrics</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        className="actorUpdateInput"
                                    />
                                </div>
                                <div className="actorUpdateItem">
                                    <label>rating</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        className="actorUpdateInput"
                                    />
                                </div>
                                <div className="actorUpdateItem">
                                    <label>year</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        className="actorUpdateInput"
                                    />
                                </div>
                                <div className="actorUpdateItem">
                                    <label>country</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        className="actorUpdateInput"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="actorUpdateRight">
                            <div className="actorUpdateUpload">
                                <img
                                    className="actorUpdateImg"
                                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="actorUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="actorUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminActorEdit;