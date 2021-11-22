import React from 'react';

//css
import './feature.css';

const Feature = ({title, text}) => {
    return (
        <div className="gpt3__feature">
            <div className="gpt3__feature-heading">
                <div/>
                <h1>{title}</h1>
            </div>
            <div className="gpt3__feature-text">
                {text}
            </div>
        </div>
    )
}

export default Feature;
