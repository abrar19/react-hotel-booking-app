import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='navContainer'>
                    <div className='navLogo'>LookUp.com</div>
                    <div className='navItems'>
                        <button className='navBtn'>Register</button>
                        <button className='navBtn'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
