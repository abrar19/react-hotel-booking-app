import React, { useState } from 'react';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTableTennis, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const handleOption = (name, operation) =>{
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'increase' ? options[name] + 1 : options[name] - 1 
            }
        });
    }
    return (
        <div className='header'>
            <div className='headerContainer'>
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car Rentals</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faTableTennis} />
                        <span>Entertainments</span>
                    </div>
                    <div className='headerListItem'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>   
                </div>
                <h1 className='headerTitle'>A Lifetime of Discounts? It's Genius!</h1>
                <p className='headerDesc'>
                    Explore the world with Booking.com. Big savings on homes, hotels, flights, car rentals, taxis, and attractions – build your perfect trip on any budget.    
                </p>
                <button className='headerBtn'>Sign-in / Register</button>
                <div className='headerSearch'>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                        <input 
                            type='text' 
                            placeholder='Where are you going?' 
                            className='headerSearchInput'
                        />
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
                        <span className='headerSearchText' onClick={()=>setOpenDate(!openDate)}>{date[0].startDate.toLocaleDateString("en-US")} to {date[0].endDate.toLocaleDateString("en-US")}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                        />}
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                        <span className='headerSearchText' onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult(s) . ${options.children} children. ${options.room} room(s)`}</span>
                        {openOptions && <div className='options'>
                            <div className='optionItem'>
                                <span className='optionText'>Adult</span>
                                <div className='optionCounter'>
                                    <button disabled={options.adult <= 1} className='optionCounterButton' onClick={()=>handleOption('adult', 'decrease')}>-</button>
                                    <span className='optionCounterNumber'>{options.adult}</span>
                                    <button className='optionCounterButton' onClick={()=>handleOption('adult', 'increase')}>+</button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span className='optionText'>Children</span>
                                <div className='optionCounter'>
                                    <button disabled={options.children <= 0} className='optionCounterButton' onClick={()=>handleOption('children', 'decrease')}>-</button>
                                    <span className='optionCounterNumber'>{options.children}</span>
                                    <button className='optionCounterButton' onClick={()=>handleOption('children', 'increase')}>+</button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span className='optionText'>Room</span>
                                <div className='optionCounter'>
                                    <button disabled={options.room <= 1} className='optionCounterButton' onClick={()=>handleOption('room', 'decrease')}>-</button>
                                    <span className='optionCounterNumber'>{options.room}</span>
                                    <button className='optionCounterButton' onClick={()=>handleOption('room', 'increase')}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className='headerSearchItem'>
                        <button className='headerBtn'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
