import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import logo from './logo.svg';

import './css/swiper.min.css';
import './App.css';
import Header from './component/header/Header.js'
import Container from './component/container/Container.js'

function App() {
  return (
    
    <div className="App">
      <Router>
        <Header />
        <Container />
      </Router>
    </div>
    
  );
}

export default App;
