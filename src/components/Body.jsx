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
              <a target="_blank" href="https://www.ctbites.com/blog/2014/8/21/food-architecture-a-conversation-with-sushi-chef-keizo-seki.html">Read More</a>
              <br/>
              <br/>
              <p>2013</p>
              <p>Los Angeles Times</p>
              <p>Saturday Section Front Page</p>
              <br/>
              <p>Los Angeles Magazine</p>
              <p>Top 15 Sushi Restaurants</p>
              <br/>
              <p>2012</p>
              <p>LA Weekly</p>
              <p>Top 10 Los Angeles Sushi Restaurants</p>
              <br/>
              <p>2011</p>
              <p>Zagat Survey</p>
              <p>Los Angeles/SO.California Restaurants</p>
              <br/>
              <p>29 Point Food Rating (30 Possible Points)</p>
              <br/>
              <p>2010</p>
              <p>New Zagat Guide Picks LA's Best Eateries</p>
              <br/>
              <p>2009</p>
              <p>Michelin Guide</p>
              <p>Michelin Star Rating</p>
            </div>
          </div>
          <div className="image" id="press-image"></div>
        </div>
      </div>
  )
}

export default Body;
