import React from 'react';

const Course = (props) => {
    const {id,name,price,description,img} =props.course
    return (
        <div>
            <div class="col">
                <div class="card">
                <img src={img} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <h3>price:${price}</h3>
                    <button className="btn btn-primary">BUY NOW</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Course;