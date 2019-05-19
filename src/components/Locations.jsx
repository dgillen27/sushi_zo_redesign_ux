import React from 'react';

const Locations = (props) => {
  const { currentCity } = props;
  return (
    <div className="locations" ref={props.locations}>
      <h1>LOCATIONS</h1>
      <div className="city-list">
        <div className="id-city" onClick={() => props.selectCity("ny")}>
          <p className={currentCity === "ny"? "selected": "not-selected"}>New York</p>
          <div className="triangle"></div>
        </div>
        <div className="id-city" onClick={() => props.selectCity("la")}>
          <p className={currentCity === "la"? "selected": "not-selected"}>Los Angeles</p>
          <div className="triangle"></div>
        </div>
        <div className="id-city" onClick={() => props.selectCity("to")}>
          <p className={currentCity === "to"? "selected": "not-selected"}>Tokyo</p>
          <div className="triangle"></div>
        </div>
        <div className="id-city" onClick={() => props.selectCity("bk")}>
          <p className={currentCity === "bk"? "selected": "not-selected"}>Bangkok</p>
          <div className="triangle"></div>
        </div>
        <div className="id-city" onClick={() => props.selectCity("hk")}>
          <p className={currentCity === "hk"? "selected": null}>Hong Kong</p>
          <div className="triangle"></div>
        </div>
      </div>

      <div className='city-container' id={currentCity}>
        <div className="restaurant-container" id={currentCity === "ny" || currentCity === "la"? "restaurant-container-one": "center-city"}>
          <div className="restaurant-image-one" id={currentCity+"-one"}></div>
          { currentCity === 'ny' &&
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
          </div> }
          { currentCity === 'la' &&
          <div className="restaurant-text" id="restaurant-text-two">
            <h2>Sushi Zo West LA</h2>
            <div className="contact-info">
              <p>Address</p>
              <p>9824 National Blvd.,</p>
              <p>#C, Los Angeles, CA</p>
              <p>90034</p>
              <br/>
              <p>Contact information</p>
              <p>424-201-5576</p>
            </div>
            <div className="hours">
              <p>Hours of operation</p>
              <p>Mon - Fri, 12pm - 2pm,</p>
              <p> 6pm - 9:30pm</p>
              <p>Sat, 6:00 pm - 9:30 pm</p>
              <br/>
              <p>Sushi Bar Seating by</p>
              <p>Reservations Only</p>
            </div>
          </div> }
          { currentCity === 'to' &&
          <div className="restaurant-text" id="restaurant-text-two">
            <h2>Sushi Zo Tokyo</h2>
            <div className="contact-info">
              <p>Address</p>
              <p>7-6-5 Roppongi</p>
              <p>Minato-Ku, Tokyo,</p>
              <p>106-0032, Japan</p>
              <br/>
              <p>Contact information</p>
              <p>+81 3-6804-5135</p>
              <p>sushizotokyo.com</p>
            </div>
            <div className="hours">
              <p>Hours of operation</p>
              <p>Mon - Sat</p>
              <p>6:00PM - 11:00PM</p>
              <br/>
              <br/>
              <p>Closed On Sunday and</p>
              <p>The third Monday</p>
            </div>
          </div> }
          { currentCity === 'bk' &&
          <div className="restaurant-text" id="restaurant-text-two">
            <h2>Sushi Zo NoHo</h2>
            <div className="contact-info">
              <p>Address</p>
              <p>Athenee Tower</p>
              <p>63 Wireless Road, Lumpini,</p>
              <p>Bangkok, Thailand</p>
              <br/>
              <p>Contact information</p>
              <p>+662-168-8490</p>
              <p>sushizobankgkok.com</p>
            </div>
            <div className="hours">
              <p>Hours of Operation</p>
              <p>Tues-Sun:</p>
              <p>First Session 5:30pm to</p>
              <p>8:00pm</p>
              <p>Second Session 8:00pm</p>
              <p>to 10:30pm</p>
            </div>
          </div> }
          { currentCity === 'hk' &&
          <div className="restaurant-text" id="restaurant-text-two">
            <h2>Sushi Zo Hong Kong</h2>
            <div className="contact-info" id="hk-info">
              <p>Address</p>
              <p>Block 01, Tai Kwun, 10</p>
              <p>Hollywood Rd, Cetral,</p>
              <br/>
              <p>Contact information</p>
              <p>+858-2884-0114</p>
            </div>
          </div> }
          <div className="button">BOOK</div>
        </div>

        { currentCity !== "to" && currentCity !== "hk" && currentCity !== "bk" &&  <div className="restaurant-container" id="restaurant-container-two">
          <div className="restaurant-image-two" id={currentCity + "-two"}></div>
          { currentCity === 'ny'&&
          <div className="restaurant-text" id="restaurant-text-two">
            <h2>Sushi Zo Hanare (Midtown NY )</h2>
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
          { currentCity === 'la'&&
          <div className="restaurant-text" id="restaurant-text-two">
            <h2>Sushi Zo Downtown LA</h2>
            <div className="contact-info">
              <p>Address</p>
              <p>334 S. Main St., #1106,</p>
              <p>Los Angeles, CA 90013</p>
              <br/>
              <br/>
              <p>Contact information</p>
              <p>424-201-5576</p>
            </div>
            <div className="hours">
              <p>Hours of operation</p>
              <p>Mon - Sat</p>
              <p>6:00PM - 9:30PM</p>
              <br/>
              <br/>
            </div>
          </div>}
          {currentCity !== "to" && currentCity !== "hk" && currentCity !== "bk" && <div className="button">BOOK</div>}
        </div>}
      </div>
    </div>
  )
}

export default Locations;
