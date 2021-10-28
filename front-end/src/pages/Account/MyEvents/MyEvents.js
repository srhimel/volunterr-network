import React from 'react';
import MyEvent from './MyEvent/MyEvent';
import './MyEvents.css';

const MyEvents = () => {
    return (
        <div className="events-wrapper">
            <div className="container">
                <div className="my-events">
                    <MyEvent />
                    <MyEvent />
                    <MyEvent />
                    <MyEvent />
                </div>
            </div>
        </div>
    );
};

export default MyEvents;