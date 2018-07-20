import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
    return (
        <div className="robots-card">
            <img src={`https://robohash.org/robot-${id}?200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;