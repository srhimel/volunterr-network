import React, { useState } from 'react';
import './Event.css';
import { ColorExtractor } from 'react-color-extractor';

const Event = () => {
    const [colors, setColors] = useState([]);

    return (
        <div className="event" style={{ background: colors[0] }}>
            <ColorExtractor getColors={colors => setColors([...colors])}>
                <img src="https://i.ibb.co/nwQtZXQ/Rectangle-55.png" alt="" />
            </ColorExtractor>
            {console.log(colors)}
            <p>Child Support is good. But not Bad</p>
        </div>
    );
};

export default Event;