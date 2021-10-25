import React from 'react';
import Banners from '../Banners/Banners';
import HomeCourse from '../Courses/HomeCourse/HomeCourse';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="banner">
                <h1>
                Best Language Learning Club In The Town
                </h1>
                <p>
                We assure the maximum quality teaching with our extensive pace and exciting modules.
                An intensive caring environment will let you explore the different portion of language learning process.
            
            So we always welcome our students warmly.
                </p>
                <button className='btn btn-dark'>Get Started</button>
            </div>
            <div>
                <HomeCourse></HomeCourse>
            </div>
            <div>
                <Banners></Banners>
            </div>
        </div>
    
    );
};

export default Home;