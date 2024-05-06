import React from 'react';
import "./CardsStyle.scss";
const Card = ({ title, cover }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={cover} alt={title} />
        </div>
    );
}

export default Card;