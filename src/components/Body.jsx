import React from 'react';
import Locations from './Locations'

const Body = (props) => {
  return (
    <div className="body">
    <div className="backdrop"></div>
      <div className="content" id="omakase" ref={props.omakase}>
        <div className="text-container" id="omakase-text">
          <h2>o&#183;ma&#183;ka&#183;se</h2>
          <div className="description">
            <p>Omakase directly translates to "I'll leave it up to you"</p>
            <p>At Sushi Zo we offer an "Omakase" multi-course tasting menu
            designed to allow you to experience the essence of traditional sushi.
             Our talented Chefs will prepare innocative and surprising selection of dishes,
              meant to delight you.</p>
          </div>
        </div>
        <div className="image" id="omakase-image"></div>
      </div>
      <div className="content" id="about-us" ref={props.about}>
        <div className="image" id="about-image"></div>
        <div className="text-container" id="about-text">
          <h2>ABOUT US</h2>
          <div className="description">
            <p>Sushi Zo is created "Ittai-ken"-style. Ittai-jan is when the neta (the seafood)and shari (sushi rice) unite in perfect harmony. This balance is the most important aspect of sushi.</p>
            <p>Our rice is meticulously cooked, seasoned with a unique blend of vinegars and served at body temperature, to create the perfect  partner to the "neta". </p>
            <p>With many of our sushi selections, we use perfectly matched accompaniment for the particular "neta", which may include our unique  soy sauce, sea, salt and other ingredients.</p>
          </div>
        </div>
      </div>
      <Locations {...props}/>
      <div className="content" id="press" ref={props.press}>
          <div className="text-container" id="press-text">
            <h2>Press</h2>
            <div className="description" id="press-description">
              <p>2018</p>
              <p>Michelin</p>
              <p>Sushi Zo NYC have been awarded a</p>
              <p>Michelin star.</p>
              <br/>
              <p>2016</p>
              <p>Michelin</p>
              <p>One year after opening its doors in New</p>
              <p>York, Sushi Zo NYC was awarded its first</p>
              <p>Michelin star</p>
              <br/>
              <p>2014 September</p>
              <p>A Conversation with Sushi Chef Keizo Seki</p>
              <p>and Architect Kulapat Yantrasast</p>
              <p>at New Canaan's Glass House</p>
              <br/>
              <p>2013</p>
              <p>Los Angeles Times</p>
              <p>Saturday Section Front Times</p>
            </div>
          </div>
          <div className="image" id="press-image"></div>
        </div>
      </div>
  )
}

export default Body;
