import React from "react";
import FiveStars from "./five-stars";
import { v4 as uuid } from "uuid";




export const ReviewForm = ({ editing, form, reviews, setForm, setEditing, setReviews }) => {
    
    const handleChange = e => {
        const {name, value} = e.target
        setForm({...form, [name]: value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        setReviews([...reviews, form]);
        setForm({reviewerName:'', review:'', id: uuid()});
    }

    const handleUpdate = e => {
        e.preventDefault();
        setEditing(false);
        const updatedReviews = reviews.map(review => review.id == form.id ? form : review)
        setReviews(updatedReviews)
        setForm({reviewerName:'', review:'', id: uuid()});
    }

    

    return (
        
        <form className="form" onSubmit={editing ? handleUpdate : handleSubmit}>
            <div className='card-body'>
                    <p className='text-center fs-5'>Review</p>
                    <div className="input-group">
                        <input 
                            className='form-control' 
                            type='text' 
                            placeholder='Tell Us Who You Are' 
                            id="reviewerName" 
                            name="reviewerName" 
                            value={form.reviewerName}
                            autoComplete= "off"
                            onChange={handleChange}
                            />
                    </div>
                    <div className='input-group'> 
                        <textarea 
                            className="form-control" 
                            aria-label="With textarea"
                            placeholder="Tell Us What You Thought!"
                            name="review"
                            id="review"
                            value={form.review}
                            onChange = {handleChange}>
                            
                        </textarea>
                    </div>
                <FiveStars />
            </div>
            <button type='submit' title="Submit Review" className='btn btn-primary form-control' >
                    {editing ? "Update" : 'Submit'}
            </button>
        </form>
    
        
    )
}