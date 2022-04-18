import React from 'react';
import './HomeReview.css'

const HomeReview = (props) => {
    const{name,comment, rating,picture}=props.data;
    return (
        <div className='home-review-css'>
            <img src={picture} alt="img" />

            <h4>{name}</h4>
            <p>{comment}</p>
            <h5>Rating : {rating}</h5>
           
            
        </div>
    );
};

export default HomeReview;