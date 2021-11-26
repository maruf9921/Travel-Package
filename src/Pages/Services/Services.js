import React, { useEffect, useState } from 'react';
import Packages from '../Packages/Packages';
import './Services.css';

const Services = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() =>{
        fetch('https://creepy-vampire-53933.herokuapp.com/services')
        .then(Response => Response.json())
        .then(data => setPackages(data))
    }, [])
    return (
        <div className="background">
        <h1 className="text-center text-light pt-5">World Tour Package Services</h1>
        <div id="services" className="container py-5 cart">
            {
                packages.map(pack => <Packages key={pack.id} pack={pack} ></Packages>)
            }
        </div>
        </div>
    );
};

export default Services;