import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import user1 from '../../images/user1.jpg';
import user2 from '../../images/user2.jpg';
import user3 from '../../images/user3.jpg';
import './ImageGallery.css';

const ImageGallery = () => {
    return (
        <div className="background py-5">
            <h1 className="text-center text-light pb-5">Our Happy Clients</h1>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                    <Image src={user1} rounded />
                    </Col>
                    <Col className="ps-5" xs={6} md={4}>
                    <Image src={user2} roundedCircle />
                    </Col>
                    <Col className="ps-5" xs={6} md={4}>
                    <Image src={user3} thumbnail />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ImageGallery;