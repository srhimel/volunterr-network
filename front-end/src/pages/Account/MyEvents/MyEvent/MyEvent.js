import React from 'react';
import './MyEvent.css'

const MyEvent = () => {
    return (
        <div className="my-event">
            <div className="img">
                <img src="https://i.ibb.co/nwQtZXQ/Rectangle-55.png" alt="" />
            </div>
            <div className="info">
                <h3>Humanity More</h3>
                <p>29 sep, 2020</p>

                <div className="button">
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default MyEvent;