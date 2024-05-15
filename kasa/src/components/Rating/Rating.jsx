import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Rating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
    let starClass = index < rating ? 'star' : 'star gray'; 
        return (
            <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={starClass}
            />
        );
    });
    return <div className="rate">{stars}</div>;
};

export default Rating;
