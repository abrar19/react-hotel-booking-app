import React from 'react';
import './featuredProperties.css'
import Mariata from './img/Mariata.jpeg'
import Stare from './img/Stare.jpeg'

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className='fpItem'>
                <img className='fpImg' src={Stare} alt='' />
                <span className='fpName'>Stare Miasto</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $140</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='fpItem'>
                <img className='fpImg' src={Mariata} alt='' />
                <span className='fpName'>Aparthotel Miasto</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $120</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='fpItem'>
                <img className='fpImg' src={Stare} alt='' />
                <span className='fpName'>Stare Miasto</span>
                <span className='fpCity'>Barcelona</span>
                <span className='fpPrice'>Starting from $100</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='fpItem'>
                <img className='fpImg' src={Mariata} alt='' />
                <span className='fpName'>7Seasons</span>
                <span className='fpCity'>Budapest</span>
                <span className='fpPrice'>Starting from $90</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProperties;
