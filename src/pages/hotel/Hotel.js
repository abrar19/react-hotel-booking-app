import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar.js'
import Header from '../../components/header/Header.js'
import MailList from '../../components/mailList/MailList.js'
import Footer from '../../components/footer/Footer.js'
import './hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import hotel1 from './img/hotel1.jpeg'
import hotel2 from './img/hotel2.jpg'
import hotel3 from './img/hotel3.jpeg'
import hotel4 from './img/hotel4.jpeg'
import hotel5 from './img/hotel5.jpeg'
import hotel6 from './img/hotel6.jpeg'

const Hotel = () => {

    const photos = [
        {src: hotel1},
        {src: hotel2},
        {src: hotel3},
        {src: hotel4},
        {src: hotel5},
        {src: hotel6}
    ]

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (index) => {
        setSlideNumber(index);
        setOpen(true)
    }

    const handleMove = (direction) =>{
        let newSlideNumber;

        if(direction ==='left'){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
        }else{
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
        }

        setSlideNumber(newSlideNumber);
    }

    return (
        <div>
            <Navbar/>
            <Header type='list'/>
            <div className='hotelContainer'>
            {open && <div className='slider'>
                    <FontAwesomeIcon onClick={()=>setOpen(false)} icon={faCircleXmark} className='close'/> 
                    <FontAwesomeIcon onClick={()=>handleMove('left')} icon={faCircleArrowLeft} className='arrow'/>
                    <div className='sliderWrapper'>
                        <img src={photos[slideNumber].src} alt='' className='sliderImg'/>
                    </div>
                    <FontAwesomeIcon onClick={()=>handleMove('right')} icon={faCircleArrowRight} className='arrow'/> 
                </div>}
                <div className='hotelWrapper'>
                    <button className='bookNow'>Reserve or Book Now!</button>
                    <h1 className='hotelTilte'>Grand Hotel</h1>
                    <div className='hotelAddress'>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton St 125 Berlin</span>
                    </div>
                    <span className='hotelDistance'>
                        Excellent location - 500m from center
                    </span>
                    <span className='hotelPriceHighlight'>
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className='hotelImages'>
                        {photos.map((photo,index) => (
                             <div className='hotelImgWrapper'>
                                <img onClick={()=>handleOpen(index)} src={photo.src} alt='' className='hotelImg'/>
                            </div>
                        ))}
                    </div>
                    <div className='hotelDetails'>
                        <div className='hotelDetailsTexts'>
                            <h1 className='hotelTitle'>Stay in the heart of Krakow</h1>
                            <p className='hotelDesc'>
                                In a central area of Lisbon, located within a short distance of Commerce Square and Rossio Square, Beautiful 3-Story house in Chiado with a 40m² private terrace offers free WiFi, air conditioning and household amenities such as a fridge and coffee machine. This property has a balcony and free private parking.
                                The apartment has 7 bedrooms, 6 bathrooms, bed linen, towels, a flat-screen TV with cable channels, a dining area, a fully equipped kitchen, and a terrace with city views.
                                St. George's Castle is a 18-minute walk from the apartment, while Dona Maria II National Theatre is 1 km away. The nearest airport is Humberto Delgado Airport, 9 km from Beautiful 3-Story house in Chiado with a 40m² private terrace.
                            </p>
                        </div>
                        <div className='hotelDetailsPrice'>
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>Located in the real heart of Krakow, this property has an excellent location score of 8.8!</span>
                            <h2><b>$945</b> (9 nights)</h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
}

export default Hotel;
