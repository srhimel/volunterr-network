import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Dashboard.css';
import { FaUserFriends, FaPlus } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";


const VolList = () => {
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
                        <div className="table">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email ID</th>
                                        <th>Registration Date</th>
                                        <th>Volunteer List</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Emil</td>
                                        <td>Tobias</td>
                                        <td>Linus</td>
                                        <td>Linus</td>
                                        <td><button><BiTrash /></button></td>
                                    </tr>
                                    <tr>
                                        <td>Emil</td>
                                        <td>Tobias</td>
                                        <td>Linus</td>
                                        <td>Linus</td>
                                        <td><button><BiTrash /></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default VolList;