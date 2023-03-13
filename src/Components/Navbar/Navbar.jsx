import React from 'react';
import './nav.css';
import IMG1 from '../../assets/clogo.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
const Navbar = () => {
    return (
        <>
        <div className='nav_main'>
            <div className="logo">
                <img src={IMG1} alt="" />
            </div>

            <div className="phone">
                <div className="circle">
                    <BsFillTelephoneFill className='icon' />
                </div>
                <div className="child_1">
                    <span>+91-75XXXXXX18</span>
                    <p>Phone</p>
                </div>
            </div>
            <div className="phone">
                <div className="circle">
                    <MdEmail className='icon' />
                </div>
                <div className="child_1">
                    <span>abhipatel67956@gmail.com</span>
                    <p>Email</p>
                </div>
            </div>
            </div>

            <div className="main_nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Mobile App</li>
                    <li>Mutual Funds</li>
                    <li>Market Views</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </>
        
    )
}

export default Navbar;