import React from 'react';

const Card = ({ title, cover }) => {
    return (
                <div className="card-content">
                    <img src={cover} alt={title} />
                    <h2>{title}</h2>
                </div>
    );
}

export default Card;