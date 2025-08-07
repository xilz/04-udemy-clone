import React, { useEffect } from 'react'
import { useState } from 'react'

const Rating = ({ initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleRatingClick = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  useEffect(() => {
    setRating(initialRating || 0);
  }, [initialRating]);

  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = index + 1;
        return (
          <span 
            key={index} 
            className={`text-xl px-1 sm:text-2xl cursor-pointer transition-colors ${
              starValue <= rating ? 'text-yellow-500' : 'text-gray-400'
            }`}
            onClick={() => handleRatingClick(starValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;