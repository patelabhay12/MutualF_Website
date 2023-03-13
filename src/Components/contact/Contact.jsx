import React from 'react';
import './contact.css';
import IMG1 from '../../assets/contact.png';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
const Contact = () => {
    return (
        <div className='contact_main'>
            <div className="contact_left">
                <img src={IMG1} alt="" />
            </div>
            <div className="contact_right">
                <h2>Contact Us</h2>

                <div className="contact_content">
                    <div className="content_c">
                        <BsTelephone className='icon' />
                        <div className="item">
                            <p>Phone</p>
                            <span>75XXXXXXXX18</span>
                        </div>
                    </div>
                    <div className="content_c">
                        <AiOutlineMail className='icon' />
                        <div className="item">
                            <p>Email</p>
                            <span>patelabhi67958@gmail.com</span>
                        </div>
                    </div>
                    <div className="content_c">
                        <GoLocation className='icon' />
                        <div className="item">
                            <p>Address</p>
                            <span>NOIDA U.P</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;