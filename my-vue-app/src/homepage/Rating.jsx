import React from 'react';

const Rating = () => {
    return (
        <div className='ratting py-10 my-20 '>
            <div className='flex justify-between text-white px-30'>
                <div>
                    <h1 className='text-4xl font-bold'>50k+</h1>
                    <p>Active Users</p>
                </div>
                <div>
                    <h1 className='text-4xl font-bold'>200+</h1>
                    <p>Premium Tools</p>
                </div>
                <div>
                    <h1 className='text-4xl font-bold'>4.9</h1>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;