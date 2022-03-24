import React from 'react';
import './Menubar.css';
// import Profession from '../Profession/Profession';

const Menubar = ({ name, count }) => {
    return (
        <div>
            {/* <h1>{name}</h1> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-2">{name}</div>
                    <div className="col-md-10 menu-container d-flex justify-content-end">
                        <li className="items me-4">Home</li>
                        <li className="items me-4">Contact</li>
                        <li className="items me-4">Cart <sup>{count}</sup></li>
                        <li className="items me-4">Login</li>
                    </div>
                </div>
            </div>
            {/* <Profession name={name} ></Profession> */}
        </div>
    );
};

export default Menubar;