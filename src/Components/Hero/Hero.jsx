import React from 'react';
import './hero.css';

const Hero = () => {
    return (
        <div className="hero_main">
            <div className="hero_sec">
                <div className="login">
                    <h2>LOGIN</h2>
                    <div className="container">
                        <label for="uname">Username</label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw">Password</label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <button type="submit">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero;