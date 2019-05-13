import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer" ref={props.contact}>
      <h2>CONTACT US</h2>
      <div className="city-list">
        <div className="contact-city">
          <h3>New York</h3>
          <p>Sushi Zo NoHo</p>
          <p>646-405-4826</p>
          <br/>
          <p>Suhi Zo Hanare</p>
          <p>(Midtown)</p>
          <p>917-265-8054</p>
          <p>hanare@sushizo.us</p>
        </div>
        <div className="contact-city">
          <h3>Los Angeles</h3>
          <p>Sushi Zo West LA</p>
          <p>424-201-5576</p>
          <p>zowla@sushizo.us</p>
          <br/>
          <p>Sushi Zo Downtown LA</p>
          <p>424-201-5576</p>
          <p>zodt@sushizo.us</p>
        </div>
        <div className="contact-city">
          <h3>Tokyo</h3>
          <p>Sushi Zo Tokyo</p>
          <p>+813-6804-5135</p>
          <p>zotokyo@sushizo.us</p>
          <p>sushizotokyo.com</p>
        </div>
        <div className="contact-city">
          <h3>Bankok</h3>
          <p>Sushi Zo Bangkok</p>
          <p>+662-168-8490</p>
          <p>zobkk@sushizo.us</p>
          <p>sushizobangkok.com</p>
        </div>
        <div className="contact-city">
          <h3>Hong Kong</h3>
          <p>Sushi Zo Hong Kong</p>
          <p>+852-2884-0114</p>
          <p>management@sushizo.us</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
