import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';
import Backdrop from './components/Backdrop';
import OpenMenu from './components/OpenMenu';

class App extends Component {
  constructor() {
    super();

    this.omakase = React.createRef();
    this.about = React.createRef();
    this.contact = React.createRef();
    this.locations = React.createRef();
    this.press = React.createRef();
    this.book = React.createRef();
    this.header = React.createRef();

    this.scrollOmakase = this.scrollOmakase.bind(this);
    this.scrollAbout = this.scrollAbout.bind(this);
    this.scrollContact = this.scrollContact.bind(this);
    this.scrollLocations = this.scrollLocations.bind(this);
    this.scrollPress = this.scrollPress.bind(this);
    this.scrollHeader = this.scrollHeader.bind(this);
    this.selectCity = this.selectCity.bind(this);
    this.changeClass = this.changeClass.bind(this);


    this.state = {
      currentCity: 'ny',
      showClass: false,
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
    this.locations.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollHeader() {
    this.header.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  changeClass() {
    const { showClass } = this.state;
    this.setState({
      showClass: showClass === true? false: true
    })
  }

  selectCity(value) {
    this.setState({
      currentCity: value
    })
  }

  render() {
    return (
      <div className="App">
        <Header header={this.header}/>
        <Nav
          scrollOmakase={this.scrollOmakase}
          scrollAbout={this.scrollAbout}
          scrollContact={this.scrollContact}
          scrollLocations={this.scrollLocations}
          scrollPress={this.scrollPress}
          scrollHeader={this.scrollHeader}
          changeClass={this.changeClass}
          showClass={this.state.showClass}/>
        {/*<Backdrop />*/}
        { this.state.showClass && <OpenMenu
          scrollOmakase={this.scrollOmakase}
          scrollAbout={this.scrollAbout}
          scrollContact={this.scrollContact}
          scrollLocations={this.scrollLocations}
          scrollPress={this.scrollPress}
          scrollHeader={this.scrollHeader}
          changeClass={this.changeClass}/>}
        <Body
          currentCity={this.state.currentCity}
          omakase={this.omakase}
          about={this.about}
          contact={this.contact}
          locations={this.locations}
          press={this.press}
          selectCity={this.selectCity}/>
        <Footer
          contact={this.contact}/>
      </div>
    );
  }
}

export default App;
