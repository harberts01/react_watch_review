import React from 'react'


export const ReviewItem = ({ handleDelete, review, handleEdit }) => {
  return (
    <div className='card mb-2'>
      <div className='card-header'>
        <p className='fs-6 fw-bold'>{review.reviewerName} says:</p>
      </div>
      
      <p>&nbsp; {review.review}</p>
      <div className='card-footer'>
        <button className='far fa-trash-alt' onClick={() => handleDelete(review.id)}></button>
        <button className='far fa' onClick={() => handleEdit(review.id)}>Edit</button>
      </div>
    </div>
  )
}

