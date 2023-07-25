// Import des composants
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Galerie from './pages/Galerie.js';

// Import Bootstrap et Routeur
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Import CSS
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route path="/galerie">
          <Galerie />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
