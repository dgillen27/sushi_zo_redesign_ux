import React from 'react';

const Nav = (props) => {
  return (
    <div className='nav'>
      <h2 onClick={props.scrollOmakase}>Omakase</h2>
      <h2 onClick={props.scrollAbout}>About Us</h2>
      <h2 onClick={props.scrollContact}>Contact</h2>
      <h2 onClick={props.scrollLocations}>Locations</h2>
      <h2 onClick={props.scrollPress}>Press</h2>
      <h2 onClick={props.scrollBook}>Book</h2>
    </div>
  )
}

export default Nav;
