import React from 'react';
import bannerImg from "../assets/banner.png"
import circleImg from "../assets/Group 5.png"
import playBtnImg from "../assets/Play.png"
const Banner = () => {
    return (
        <div className='flex gap-10'>
            <div>
                <div className='space-y-5'>
                    <div className='flex gap-2 bg-purple-200 rounded-2xl py-[10px] px-[15px]'>
                        <img className='' src={circleImg} alt="" />
                        <p>New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className='text-5xl font-bold'>Supercharge Your Digital Workflow</h1>
                    <p className='opacity-70'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <div className='flex gap-5 '>
                        <button className='btn rounded-2xl'>Explore Products</button>
                        <div className='flex gap-2 btn rounded-2xl'>
                            <img src={playBtnImg} alt="" />
                            <button>Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;