import React from 'react';
import ReactPlayer from 'react-player';
import { Card } from 'react-bootstrap';
import './Provide.css';

const Provide = () => {
    return (
        <div className="bg-dark">
            <div className="container py-5">
            <h1 className="text-center text-light pb-5">Best Offers Provide Our Agency</h1>
            <ReactPlayer width='1200px' height='550px' controls url='https://www.youtube.com/watch?v=_JfK7qySzDM' />
        </div>
        </div>
        
    );
};

export default Provide;