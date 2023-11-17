import React, { useEffect, useRef, useState } from 'react';
import img1 from '../assets/img-1.jpg';

function Animeslider() {
  const thumbRef = useRef(null);
  const sliderScrollbarRef = useRef(null);
  const imageListRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const thumbElement = thumbRef.current;
    const sliderScrollbarElement = sliderScrollbarRef.current;
    const imageListElement = imageListRef.current;

    const handleMouseDown = (e) => {
      e.preventDefault();
      const startX = e.clientX;
      const thumbPosition = thumbElement.offsetLeft;
      const maxThumbPosition = sliderScrollbarElement.getBoundingClientRect().width - thumbElement.offsetWidth;
      const maxScrollLeft = imageListElement.scrollWidth - imageListElement.clientWidth;

      const handleMouseMove = (e) => {
        if (isDragging) {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

          thumbElement.style.left = `${boundedPosition}px`;
          imageListElement.scrollLeft = scrollPosition;
        }
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      setIsDragging(true);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    thumbElement.addEventListener('mousedown', handleMouseDown);

    return () => {
      thumbElement.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isDragging]);

  return (
    <div className="slider__container">
      <div className="row">
        <div className="slider-wrapper">
          <div
            ref={imageListRef}
            className="image-list"
            style={{ width: '100%', overflowX: 'auto' }}
          >
            <img className="image-item" src={img1} alt="" />
            <img className="image-item" src={img1} alt="" />
            <img className="image-item" src={img1} alt="" />
            <img className="image-item" src={img1} alt="" />
            <img className="image-item" src={img1} alt="" />
            <img className="image-item" src={img1} alt="" />
            <img className="image-item" src={img1} alt="" />

          </div>
          <div ref={sliderScrollbarRef} className="slider-scrollbar">
            <div className="scrollbar-track">
              <div ref={thumbRef} className="scrollbar-thumb"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animeslider;

