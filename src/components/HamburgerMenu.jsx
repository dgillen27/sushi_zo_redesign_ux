import React from 'react';

const HamburgerMenu = (props) => {
  return (
    <div className="hamburger" onClick={props.changeClass}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  )
}

export default HamburgerMenu;
