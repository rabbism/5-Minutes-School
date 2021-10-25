import React, { createContext, useEffect, useState } from 'react';
import Course from './Course/Course';
export const CourseContext  =  createContext({})
const Courses = () => { 
    const[course,setCourse] =useState([])
    useEffect(()=>{
        fetch('./fakedata.JSON')
        .then(res => res.json())
        .then(data => setCourse(data))
    } ,[])
    return (
        <CourseContext.Provider value={course}>
        <div className="bg-success pt-5">
            <h2 className="text-center text-white">We Have {course.length} Courses To Ensure The Best Learning For You.
 </h2>
          <div className="m-auto">
          <div class="row row-cols-1 row-cols-md-4 g-5 mt-5 container">
            {
                course.map( course =><Course key={course.id} course={course}></Course>)
            }
            </div>
          </div>






        
        </div>
        </CourseContext.Provider>
    );
};

export default Courses;