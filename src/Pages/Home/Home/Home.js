import React from 'react';
import Header from '../../Shared/Header/Header';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div id='home'>
            <Slider></Slider>
            <Services></Services>
            <Experts></Experts>
            
        </div>
    );
};

export default Home;