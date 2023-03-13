import React from 'react';
import './about.css';
import IMG1 from '../../assets/AboutusFirst.png';
import IMG2 from '../../assets/AboutUs2.png';

const About = () => {
    return (
        <div className='about_main'>
            <div className="left_about">
                <img src={IMG1} alt="" />
                <img src={IMG2} alt="" />
            </div>
            <div className="right_about">
                <h1>About Us</h1>
                <span>We adopt a structured and disciplined advisory approach in Mfjunction and provide you with portfolio solutions that meet your desired financial goals and milestones. Work with us to develop a wealth creation and protection plan that provides you with the best chance to reach your financial goals according to your specific needs and comfort levels.</span>
            </div>
        </div>
    )
}

export default About;