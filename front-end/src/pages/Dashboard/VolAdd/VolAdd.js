import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserFriends, FaPlus } from "react-icons/fa";
import { AiOutlineCloudUpload } from "react-icons/ai";
import './VolAdd.css';

const Main = () => {
    return (
        <div className="dashboard">
            <div className="container">
                <div className="dash-wrapper">
                    <div className="dash-navigation">
                        <div className="nav">
                            <ul>
                                <li><NavLink exact activeClassName={"active-header"} to="/dashboard"><FaUserFriends /> Volunteer register list</NavLink></li>
                                <li><NavLink activeClassName={"active-header"} to="/dashboard/events/add-new"><FaPlus /> Add event</NavLink></li>

                            </ul>
                        </div>
                    </div>
                    <div className="dash-main">
                        <div className="add-event">
                            <form>
                                <div className="form-inputs">
                                    <div className="form-group">
                                        <label htmlFor="title"> Event Title</label>
                                        <input type="text" placeholder="Event Title" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title"> Event Date</label>
                                        <input type="date" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title"> Description</label>
                                        <textarea name="" id="" cols="30" rows="5" placeholder="Event Description"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title"> Banner</label>
                                        <button type="button">
                                            <AiOutlineCloudUpload />
                                            Upload Image
                                            <input type="file" />
                                        </button>
                                    </div>
                                </div>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Main;