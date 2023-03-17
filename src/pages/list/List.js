import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar.js'
import SearchItem from '../../components/searchItem/SearchItem';
import './list.css'

const List = () => {

    const location = useLocation();
    let destination = location.state.destination;
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState(location.state.date);
    let options = location.state.options;

    return (
        <div>
            <Navbar/>
            <Header type='list'/>
            <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <h1 className='lsTitle'>Search</h1>
                        <div className='lsItem'>
                            <label>Destination</label>
                            <input type='text' placeholder={destination}/>
                        </div>
                        <div className='lsItem'>
                            <label>Chech-in Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}>{date[0].startDate.toLocaleDateString("en-US")} to {date[0].endDate.toLocaleDateString("en-US")}</span>
                            {openDate && <DateRange
                            onChange={item => setDate([item.selection])}
                            minDate={new Date()}
                            ranges={date}
                        />}
                        </div>
                        <div className='lsItem'>
                            <label>Options</label>
                            <div className='lsOptions'>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Min price <small>per night</small></span>
                                    <input type='number' className='lsOptionInput'/>
                                </div>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Max price <small>per night</small></span>
                                    <input type='number' className='lsOptionInput'/>
                                </div>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Adult</span>
                                    <input type='number' min='1' className='lsOptionInput' placeholder={options.adult}/>
                                </div>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Children</span>
                                    <input type='number' min='0' className='lsOptionInput' placeholder={options.children}/>
                                </div>
                                <div className='lsOptionItem'>
                                    <span className='lsOptionText'>Room</span>
                                    <input type='number' min='1' className='lsOptionInput' placeholder={options.room}/>
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className='listResult'>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
