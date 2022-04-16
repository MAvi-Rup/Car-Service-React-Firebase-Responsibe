import React, { useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {id: 1, name: 'Will Smith', img: './images/experts/expert-1.jpg'},
        {id: 2, name: 'Chris Rock', img: './images/experts/expert-2.jpg'},
        {id: 3, name: 'Dwayne Rock', img: './images/experts/expert-3.jpg'},
        {id: 4, name: 'Messy Vai', img: './images/experts/expert-4.jpg'},
        {id: 5, name: 'Ronaldo Bro', img:'./images/experts/expert-5.jpg'},
        {id: 6, name: 'Stachy Jhonson', img: './images/experts/expert-6.png'},
    ]

    return (
        <div className='container' id='experts'>
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert= {expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;