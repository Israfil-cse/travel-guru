import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Header from './Components/Header/Header';
import NotFunds from './Components/NotFunds/NotFunds';
import Hotel from './Components/Hotel/Hotel';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/news">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/destination">
            <NotFunds></NotFunds>
          </Route>
          <Route path="/blog">
          <NotFunds></NotFunds>
          </Route>
          <Route path="/contact">
          <NotFunds></NotFunds>
          </Route>
          <Route path="/booking:bookingid">
            <Booking></Booking>
          </Route>
          <Route path="/hotel:hotelid">
            <Hotel></Hotel>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
