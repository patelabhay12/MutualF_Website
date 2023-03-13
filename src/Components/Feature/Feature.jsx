import React from 'react';
import './feature.css';
import { HiOutlineUserGroup } from 'react-icons/hi';

const Feature = () => {
    return (
        <div className='feature_main'>
            <h1>Features</h1>
            <div className="features_box">
                <div className="main_box">
                    <div className="box">
                        <HiOutlineUserGroup className='icon'/>
                        <div className="content">
                            <h3>Family Account</h3>
                            <span>Access your family member's Portfolio with one single login</span>
                        </div>
                    </div>
                </div>
                <div className="main_box">
                    <div className="box">
                        <HiOutlineUserGroup className='icon'/>
                        <div className="content">
                            <h3>Family Account</h3>
                            <span>Access your family member's Portfolio with one single login</span>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="features_box">
                <div className="main_box">
                    <div className="box">
                        <HiOutlineUserGroup className='icon'/>
                        <div className="content">
                            <h3>Family Account</h3>
                            <span>Access your family member's Portfolio with one single login</span>
                        </div>
                    </div>
                </div>
                <div className="main_box">
                    <div className="box">
                        <HiOutlineUserGroup className='icon'/>
                        <div className="content">
                            <h3>Family Account</h3>
                            <span>Access your family member's Portfolio with one single login</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Feature;