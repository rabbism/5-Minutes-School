import React from 'react';

const SingalCourse = (props) => {
    const {id,name,price,description,img} =props.course
    return (
        <div className='col-3 border border-dark h-25 ml-2 gx-4'>
            <img className='w-100' src={img} alt="" />
            <div className='text-center'>
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <button className='btn btn-dark'>Details</button>
            </div>
        </div>
    );
};

export default SingalCourse;