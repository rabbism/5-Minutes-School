import React, { useEffect, useState } from 'react';
import Course from './Course/Course';

const Courses = () => { 
    const[course,setCourse] =useState([])
    useEffect(()=>{
        fetch('./fakedata.JSON')
        .then(res => res.json())
        .then(data => setCourse(data))
    } ,[])
    return (
        <div>
            <h2>i am course </h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                course.map( course =><Course key={course.id} course={course}></Course>)
            }
            </div>






        
        </div>
    );
};

export default Courses;