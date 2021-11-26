import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Packages.css';

const Packages = ({ pack }) => {
    const { img, packagename, facilities, discription, price } = pack;
    return (
        <div>
            <Card className="color" style={{ width: '22rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-center text-light">{packagename}</Card.Title>
                    <Card.Subtitle className="text-center text-light p-3">{facilities}</Card.Subtitle>
                    <Card.Text className="text-center text-light">
                    {discription}
                    </Card.Text>
                    <Card.Title className="text-center text-light">${price}</Card.Title>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Link to="/booking">
                        <button type="button" class="btn btn-outline-warning fw-bold">Booking Now</button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Packages;