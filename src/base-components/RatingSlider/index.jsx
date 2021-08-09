import React from 'react';
import './index.css';


const RatingSlider = ({ category, value, onChange }) => {
  return (
    <div className='rating'>
      <label className='rating__label' for={category}>{category}</label>
      <input type='range' id={category} name={category} min='0' max='10' value={value} onChange={onChange} />
      <div className='rating__score' id='ratingOne'>{value}</div>
    </div>
  );
};

export default RatingSlider;