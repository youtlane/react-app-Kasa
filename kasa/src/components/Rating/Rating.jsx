import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';


const Rating = ({ rating }) => {
  // Create an array with 5 elements and map over it to create stars
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={index < rating ? faStar : faStarEmpty}
      className="star"
    />
  ));

  return <div className="rate">{stars}</div>;
};

export default Rating;