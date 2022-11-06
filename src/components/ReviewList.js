import React from 'react';
import { ReviewItem } from './ReviewItem';



export const ReviewList = ({reviews, setReviews, setEditing, setForm}) => {
  const handleDelete = id => {
    const updatedReviews = reviews.filter(review => review.id !== id);
    setReviews(updatedReviews);
  }

  const handleEdit = id => {
    const editedPost = reviews.filter((review) => review.id == id);
    setForm(editedPost[0]);
    setEditing(true);
  }

  return (
    <div>
        <h1>Reviews</h1>
        {reviews.map(review => (
            <ReviewItem key={review.id} review={review} handleDelete={handleDelete} handleEdit={handleEdit}/>
        ))}
    </div>
  )
}

