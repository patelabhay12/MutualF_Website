import React from 'react';
import './mobile.css';
import IMG1 from '../../assets/MApp1.png';
import IMG2 from '../../assets/MApp2.png';
const MobileApp = () => {
    return (
        <div className='about_main'>
            <div className="left_about">
                <img src={IMG1} alt="" />
                <img src={IMG2} alt="" />
            </div>
            <div className="right_about">
                <h1>Mobile App</h1>
                <span>Manage your wealth & track your family's portfolio with one single login. You can easily and quickly invest in Mutual Funds from the app. Explore funds, view their performance and invest. Start an SIP or invest Lumpsum. Check out our recommendation of funds under Focused Funds. Whether you made profits or loss, check out from the reports. Simply Login and setup a 4 digit PIN for subsequent login so that you don’t need to enter your Username & Password every time. Download Now!</span>
            </div>
        </div>
    )
}

export default MobileApp;