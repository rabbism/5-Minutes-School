import React, { createContext, useEffect, useState } from 'react';
import Course from './Course/Course';
export const CourseContext  =  createContext({})
const Courses = () => { 
 const ab='hdgsds'
    const[course,setCourse] =useState([])
    useEffect(()=>{
        fetch('./fakedata.JSON')
        .then(res => res.json())
        .then(data => setCourse(data))
    } ,[])
    return (
        <CourseContext.Provider value={course}>
        <div>
            <h2>i am course </h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                course.map( course =><Course key={course.id} course={course}></Course>)
            }
            </div>






        
        </div>
        </CourseContext.Provider>
    );
};

export default Courses;