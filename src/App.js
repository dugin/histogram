import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import Histogram from "./Histogram";


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
            <Histogram/>
          <Footer/>
      </div>
    );
  }
}

export default App;
