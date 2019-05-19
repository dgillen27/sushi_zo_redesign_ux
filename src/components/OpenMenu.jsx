import React from 'react';
import XButton from './XButton'

const OpenMenu = (props) => {
  return (
    <div className="open-menu">
      <h1 onClick={props.changeClass}>X</h1>
      {/*<XButton {...props}/>*/}
      <h2 onClick={() => props.changeClass() || props.scrollOmakase()}>OMAKASE</h2>
      <h2 onClick={() => props.changeClass() || props.scrollAbout()}>ABOUT US</h2>
      <h2 onClick={() => props.changeClass() || props.scrollContact()}>CONTACT</h2>
      <h2 onClick={() => props.changeClass() || props.scrollLocations()}>LOCATIONS</h2>
      <h2 onClick={() => props.changeClass() || props.scrollPress()}>PRESS</h2>
      <h2 className="open-book" onClick={() => props.changeClass() || props.scrollLocations()}>BOOK</h2>
    </div>
  )
}

export default OpenMenu;
