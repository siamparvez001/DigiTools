import React from 'react';
import userImg from "../assets/user.png"
import packageImg from "../assets/package.png"
import rocketImg from "../assets/rocket.png"
const Steps = () => {
    return (
        <div>
            <div>
                <h1>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
                <div>
                    <div className=''>
                        <p>01</p>
                        <img src={userImg} alt="" />
                        <h1>Create Account</h1>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;