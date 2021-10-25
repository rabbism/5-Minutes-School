import React, { useEffect, useState } from 'react';
import SingalCourse from './SingalCourse/SingalCourse';


const HomeCourse = () => {
    
  const[course,setCourse] = useState([])
  useEffect(()=>{
      fetch('./headFake.JSON')
      .then(res =>res.json())
      .then(data =>setCourse(data))
  },[])
    return (
      
      <div>
          <div className="w-50 m-auto mt-5">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search Courses" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
          </div>
            <div className="container row mt-5 w-75 m-auto ">
            {
                course.map(course=><SingalCourse course={course}></SingalCourse>)
            }
        </div>
      </div>
    );
};

export default HomeCourse;