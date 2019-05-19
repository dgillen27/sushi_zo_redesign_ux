import React from 'react';

const XButton = (props) => {
  return (
    <div id="x-button" onClick={props.changeClass}>
      <div className="x-lines" id="x-one"></div>
      <div className="x-lines" id="x-two"></div>
    </div>
  )
}

export default XButton;
