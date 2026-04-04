import React from 'react';
import facebookImg from "../assets/Facebook.png"
import instagramImg from "../assets/Instagram.png"
import twiterImg from "../assets/Twitter.png"

const Footer = () => {
    return (
        <div className='bg-blue-400 h-[400px]'>
            <div className='py-20 mt-10'>
                <div className='flex justify-between gap-5 pb-10'>
                    <div className='space-y-4'>
                        <h1 className='text-3xl   '>DigiTools</h1>
                        <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-2xl'>Product</h1>
                        <h1>Features</h1>
                        <h1>Pricing</h1>
                        <h1>Templates</h1>
                        <h1>Integrations</h1>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-2xl'>Company</h1>
                        <h1>About</h1>
                        <h1>Blog</h1>
                        <h1>Careers</h1>
                        <h1>Press</h1>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-2xl'>Resources</h1>
                        <h1>Documentation</h1>
                        <h1>Help Center</h1>
                        <h1>Community</h1>
                        <h1>Contact</h1>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-2xl'>Social Links</h1>
                        <div className='flex'>
                            <a href=""><img src={facebookImg} alt="" /></a>
                            <a href=""><img src={instagramImg} alt="" /></a>
                            <a href=""><img src={twiterImg} alt="" /></a>
                        </div>
                    </div>
                </div>
                <hr className='pt-10' />
                <div className='flex justify-between'>
                    <div>
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div className='flex justify-between gap-5'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service </p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;