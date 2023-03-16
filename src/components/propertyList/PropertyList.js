import React from 'react';
import './propertyList.css'
import Hotels from './img/Hotels.jpeg'
import Apartments from './img/Apartments.jpeg'
import Resorts from './img/Resorts.jpeg'
import Villas from './img/Villas.jpeg'

const PropertyList = () => {
    return (
        <div className='pList'>
            <div className='pListItem'>
                <img className='pListImg' src={Hotels} alt='' />
                <div className='pListTitles'>
                    <h1>Hotels</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img className='pListImg' src={Apartments} alt='' />
                <div className='pListTitles'>
                    <h1>Apartments</h1>
                    <h2>2323 Apartments</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img className='pListImg' src={Resorts} alt='' />
                <div className='pListTitles'>
                    <h1>Resorts</h1>
                    <h2>80 Resorts</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img className='pListImg' src={Villas} alt='' />
                <div className='pListTitles'>
                    <h1>Villas</h1>
                    <h2>1262 Villas</h2>
                </div>
            </div>
            <div className='pListItem'>
                <img className='pListImg' src={Hotels} alt='' />
                <div className='pListTitles'>
                    <h1>Hotels</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>
        </div>
    );
}

export default PropertyList;
