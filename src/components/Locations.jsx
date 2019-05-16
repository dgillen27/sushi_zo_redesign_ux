import React from 'react';

const Locations = (props) => {
  const { currentCity } = props;
  return (
    <div className="locations" ref={props.locations}>
      <h1>LOCATIONS</h1>
      <div className="city-list">
        <p>New York</p>
        <p>Los Angeles</p>
        <p>Tokyo</p>
        <p>Bangkok</p>
        <p>Hong Kong</p>
      </div>
      <div className='city-container' id={currentCity}>
        <div className="restaurant-container" id="restaurant-container-one">
          <div className="restaurant-image-one" id={currentCity+"-one"}></div>
          { currentCity === 'new-york' &&
          <div className="restaurant-text" id="restaurant-text-two">
            <h2>Sushi Zo NoHo</h2>
            <div className="contact-info">
              <p>Address</p>
              <p>88 W. 3rd Street</p>
              <p>New York, NY 10012</p>
              <br/>
              <br/>
              <p>Contact information</p>
              <p>646-405-4826</p>
            </div>
            <div className="hours">
              <p>Hours of operation</p>
              <p>Tues - Sat</p>
              <p>6:00PM & 8:30PM</p>
              <br/>
              <br/>
              <p>Sushi Bar Seating by</p>
              <p>Reservations Only</p>
            </div>
          </div>}
          <div className="button">BOOK</div>
        </div>

        <div className="restaurant-container" id="restaurant-container-two">
          <div className="restaurant-image-two" id={currentCity + "-two"}></div>
          { currentCity === 'new-york'&&
          <div className="restaurant-text" id="restaurant-text-two">
            <h2>Sushi Zo Honare (Midtown NY )</h2>
            <div className="contact-info">
              <p>Address</p>
              <p>88 W. 3rd Street</p>
              <p>New York, NY 10012</p>
              <br/>
              <br/>
              <p>Contact information</p>
              <p>646-405-4826</p>
            </div>
            <div className="hours">
              <p>Hours of operation</p>
              <p>Mon - Fri</p>
              <p>6:00PM & 8:30PM</p>
              <br/>
              <br/>
              <p>Sushi Bar Seating by</p>
              <p>Reservations Only</p>
            </div>
          </div>}
          <div className="button">BOOK</div>
        </div>
      </div>
    </div>
  )
}

export default Locations;
