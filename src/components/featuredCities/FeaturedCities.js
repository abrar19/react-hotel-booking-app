import React from 'react';
import './featuredCities.css';
import imgBerlin from './img/Berlin.jpg'
import imgHamurg from './img/Hamburg.jpg'
import imgFrankfurt from './img/Frankfurt.jpg'

const FeaturedCities = () => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <img className='featuredImg' src={imgBerlin} alt=''/>
                <div className='featuredTitles'>
                    <h1>Berlin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img className='featuredImg' src={imgHamurg} alt=''/>
                <div className='featuredTitles'>
                    <h1>Hamburg</h1>
                    <h2>124 Properties</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img className='featuredImg' src={imgFrankfurt} alt=''/>
                <div className='featuredTitles'>
                    <h1>Frankfurt</h1>
                    <h2>125 Properties</h2>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCities;
