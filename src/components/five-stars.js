import React, {useEffect, useState} from 'react';
import { FaStar } from 'react-icons/fa';
import '../App.css';

const FiveStars = () => {
  // const initialRating = JSON.parse(localStorage.getItem("rating") || "[]");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    localStorage.setItem("rating", JSON.stringify(rating));
  }, [rating])



    return (
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return  <label>
                    <input 
                    type="radio" 
                    name='rating' 
                    value = {ratingValue} onClick={() => setRating(ratingValue)}
                    
                    /> 
                    <FaStar 
                      className ="star form-control" 
                      color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                      onMouseEnter ={() => setHover(ratingValue)}
                      onMouseLeave ={() => setHover(null)}
                      size={40} 
                      />
                  </label>
               
        })}
      </div>
    ); 
  };


export default FiveStars

