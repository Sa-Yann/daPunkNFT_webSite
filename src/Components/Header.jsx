import React from 'react'
import punkLogo_Img from '../assets/header/cryptopunk-logo.png';
import searchIcon_Img from '../assets/header/search.png';
import theneSwitch_Img from '../assets/header/theme-switch.png'
import './header.css';

function Header() {
  return (
    <div className='header'>
        <div className="logoContainer">
            <img 
                className="punkLogo"
                src={punkLogo_Img} 
                alt="punkLogo_Img" 
            />
        </div>
        <div className="searchbar">
            <div className="searchIcon">
                <img 
                    src={searchIcon_Img} 
                    alt="searchIcon_Img"
                />
            </div>
            <input 
                type="text" 
                className="searchInput" 
                 placeholder="Search a Collection"
            />
        </div>
        <div className="header_menuItems">
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>
        <div className="header_Actions">
            <div className="themeSwith_Container">
                <img className="themeSwith_Img" src={theneSwitch_Img} alt="" />
            </div>
            <div className="getIn_Btn">
                GET IN
            </div>
        </div>
    </div>
  )
}

export default Header