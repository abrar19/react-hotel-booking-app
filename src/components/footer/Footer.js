import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='fLists'>
                <ul className='fList'>
                    <li className='fListItem'>Countries</li>
                    <li className='fListItem'>Regions</li>
                    <li className='fListItem'>Cities</li>
                    <li className='fListItem'>Districts</li>
                    <li className='fListItem'>Airports</li>
                    <li className='fListItem'>Hotels</li>
                </ul>
                <ul className='fList'>
                    <li className='fListItem'>Homes</li>
                    <li className='fListItem'>Apartments</li>
                    <li className='fListItem'>Resorts</li>
                    <li className='fListItem'>Villas</li>
                    <li className='fListItem'>Hostels</li>
                    <li className='fListItem'>B&Bs</li>
                </ul>
                <ul className='fList'>
                    <li className='fListItem'>Unique places to stay</li>
                    <li className='fListItem'>All destinations</li>
                    <li className='fListItem'>All flight destinations</li>
                    <li className='fListItem'>Discover</li>
                    <li className='fListItem'>Reviews</li>
                    <li className='fListItem'>Discover monthly stays</li>
                </ul>
                <ul className='fList'>
                    <li className='fListItem'>Car rental</li>
                    <li className='fListItem'>Flight finder</li>
                    <li className='fListItem'>Restaurant reservations</li>
                    <li className='fListItem'>LookUp.com for Travel Agents</li>
                    <li className='fListItem'>Traveller Review Awards</li>
                    <li className='fListItem'>Travel communities</li>
                </ul>
                <ul className='fList'>
                    <li className='fListItem'>Coronavirus (COVID-19) FAQs</li>
                    <li className='fListItem'>About LookUp.com</li>
                    <li className='fListItem'>Customer Service Help</li>
                    <li className='fListItem'>Partner help</li>
                    <li className='fListItem'>Careers</li>
                    <li className='fListItem'>Sustainability</li>
                </ul>
            </div>
            <div className='fText'>&copy; LookUp.com by developed by <span className='color'>Abrar Haque</span> with <span className='color'>React.js</span></div>
        </div>
    );
}

export default Footer;
