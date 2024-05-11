import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 

const Carrousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="carrousel">
      {images.length > 1 && (
        <div className="arrows">
          <FontAwesomeIcon icon={faChevronLeft} className="arrow" onClick={goToPreviousSlide} />
          <FontAwesomeIcon icon={faChevronRight} className="arrow" onClick={goToNextSlide} />
        </div>
      )}

      <div className="slides">
        <div className="slide active">
          <img className="slide-pic" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
      </div>

      {images.length > 1 && (
        <div className="pagination">
          {currentSlide + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default Carrousel;
