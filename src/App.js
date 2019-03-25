import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travels from "./my-travels.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travels
          country="Just a wonderful land, lost in pacific ocean"
          destination="New Zealand"
          photo="https://www.breakfree.com.au/Portals/0/GalleryImages/System/Locations/NewZealand/SouthIsland/Tekapo_-_image_courtesy_of_Sean_Scott.t76909.jpg"
        />
        <Travels
          country="Have you ever seen a red dragon ?"
          destination="Wales"
          photo="https://landlords.org.uk/sites/default/files/iStock-652176186.jpg"
        />
      </div>
    );
  }
}

export default App;
