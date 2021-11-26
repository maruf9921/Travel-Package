import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div class="container">
                <div class="row">
                    <div class="col">
                    <h6 className="text-light">Customers</h6>
                    <p>Buyers</p>
                    <p>Supplier</p>
                    </div>
                    <div class="col">
                    <h6 className="text-light">Company</h6>
                    <p>About us</p>
                    <p>Tour</p>
                    <p>Booking</p>
                    </div>
                    <div class="col">
                    <h6 className="text-light">Further Information</h6>
                    <p>Terms & condition</p>
                    <p>Privacy</p>
                    </div>
                </div>
                <p className="text-dark">© 2020-2021 The Nemours Foundation. All rights reserved.</p>
            </div>
            {/* <p>  For specific tour adviceinformation on Tourisum®</p>
            <p>© 2020-2021 The Nemours Foundation. All rights reserved.</p> */}
        </div>
    );
};

export default Footer;