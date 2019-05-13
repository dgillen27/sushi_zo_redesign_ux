import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer'

class App extends Component {
  constructor() {
    super();

    this.omakase = React.createRef();
    this.about = React.createRef();
    this.contact = React.createRef();
    this.locations = React.createRef();
    this.press = React.createRef();
    this.book = React.createRef();

    this.scrollOmakase = this.scrollOmakase.bind(this);
    this.scrollAbout = this.scrollAbout.bind(this);
    this.scrollContact = this.scrollContact.bind(this);
    this.scrollLocations = this.scrollLocations.bind(this);
    this.scrollPress = this.scrollPress.bind(this);


    this.state = {
      currentCity: 'new-york'
    }
  }

  scrollOmakase() {
    this.omakase.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollAbout() {
    this.about.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollContact() {
    this.contact.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollLocations() {
    this.locations.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollPress() {
    this.press.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollBook() {
    this.book.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Nav
          scrollOmakase={this.scrollOmakase}
          scrollAbout={this.scrollAbout}
          scrollContact={this.scrollContact}
          scrollLocations={this.scrollLocations}
          scrollPress={this.scrollPress}/>
        {/*<Backdrop />*/}
        <Body
          currentCity={this.state.currentCity}
          omakase={this.omakase}
          about={this.about}
          contact={this.contact}
          locations={this.locations}
          press={this.press}/>
        <Footer
          contact={this.contact}/>
      </div>
    );
  }
}

export default App;
