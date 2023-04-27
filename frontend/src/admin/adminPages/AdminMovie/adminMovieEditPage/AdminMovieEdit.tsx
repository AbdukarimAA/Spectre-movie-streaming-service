import React from 'react';
import {Link} from "react-router-dom";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@mui/icons-material";
import SideBar from "../../../adminComponents/sideBar/SideBar";
import "./AdminMovieEdit.scss";

export const AdminMovieEdit = () => {
    return (
        <div className="movie-edit-admin">
            <SideBar />
            <div className="movieContainer">
                <div className="movieUpdate">
                    <Link to="/newmovie">
                        <button className="movieAddButton">Create</button>
                    </Link>
                    <br/>
                    <span className="movieUpdateTitle">Edit Movie</span>
                    <form className="movieUpdateForm">
                        <div className="movieUpdateLeft">
                            <div className="admin-movie-left">
                                <div className="movieUpdateItem">
                                    <label>movie title</label>
                                    <input
                                        type="text"
                                        placeholder="any movie"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>Short desc</label>
                                    <input
                                        type="text"
                                        placeholder="Anna Becker"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>Full desc</label>
                                    <input
                                        type="text"
                                        placeholder="annabeck99@gmail.com"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>duration</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>typeOfMovie</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="admin-movie-info">
                                <div className="movieUpdateItem">
                                    <label>audioLyrics</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>rating</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>year</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>country</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        className="movieUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="admin-movie-crew">
                                <div className="movieUpdateItem">
                                    <label>director</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>actors</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>producers</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>screenWriters</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>operators</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="admin-movie-urls">
                                <div className="movieUpdateItem">
                                    <label>trailer</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>video</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>posterImg</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>titleImg</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        className="movieUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="admin-movie-right">
                                <div className="movieUpdateItem">
                                    <label>ageLimit</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>language</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>genre</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div><div className="movieUpdateItem">
                                <label>originalTitle</label>
                                <input
                                    type="text"
                                    placeholder="New York | USA"
                                    className="movieUpdateInput"
                                />
                            </div>
                                <div className="movieUpdateItem">
                                    <label>releaseDate</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                                <div className="movieUpdateItem">
                                    <label>quality</label>
                                    <input
                                        type="text"
                                        placeholder="New York | USA"
                                        className="movieUpdateInput"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="movieUpdateRight">
                            <div className="movieUpdateUpload">
                                <img
                                    className="movieUpdateImg"
                                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="movieUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="movieUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};