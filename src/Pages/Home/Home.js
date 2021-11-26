import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider3 from '../../images/slider3.jpg';
import slider4 from '../../images/slider4.jpg';
import slider1 from '../../images/slider1.jpg';


const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider4}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;