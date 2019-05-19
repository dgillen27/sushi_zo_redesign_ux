import React from 'react';
import HamburgerMenu from './HamburgerMenu'

const Nav = (props) => {
  return (
    <div className='nav'>
      <div className="nav-content">
        <h2 onClick={props.scrollOmakase}>OMAKASE</h2>
        <h2 onClick={props.scrollAbout}>ABOUT US</h2>
        <h2 onClick={props.scrollContact}>CONTACT</h2>
        <img onClick={props.scrollHeader} src="https://s3.amazonaws.com/image-urls/images/sushizo-1.png" alt="" />
        <h2 onClick={props.scrollLocations}>LOCATIONS</h2>
        <h2 onClick={props.scrollPress}>PRESS</h2>
        <div className="button" id="nav-book" onClick={props.scrollLocations}>BOOK</div>
      </div>
      <HamburgerMenu {...props}/>
      <img id="mobile-img" onClick={props.scrollHeader}  src="https://s3.amazonaws.com/image-urls/images/sushizo-1.png" alt="" />
    </div>
  )
}

export default Nav;
