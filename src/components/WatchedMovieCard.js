import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import { ReviewForm } from './ReviewForm';
import { ReviewList } from './ReviewList';
import { MovieControls } from './MovieControls';


export const WatchedMovieCard = ({ movie, type }) => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({reviewerName:'', review:'', id: uuid()});
  const [editing, setEditing] = useState(false);
  return (
    
    <div className='movie-card'>
    <div className='card'>
      <div className='overlay'></div>
      {movie.poster_path ? (
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
              alt={`${movie.title} Poster`}
              />
          ) : (
              <div className='filler-poster'></div>
          )}
        <MovieControls type={type} movie={movie} />
      </div>
          <ReviewForm
              editing={editing} 
              form={form}
              setEditing={setEditing}
              setForm={setForm}
              reviews={reviews}
              setReviews={setReviews}
            />
            <ReviewList 
          setEditing={setEditing}
          reviews={reviews}
          setReviews={setReviews}
          setForm={setForm}/>
  </div>
    )
} 
