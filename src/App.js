import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import SportsList from './components/SportsList';
import MoviesList from './components/MoviesList';
import FoodTravelList from './components/FoodTravelList';

//Class components have access to local state and lifecycle hooks. 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Here are a list of possible things to watch:</h1>
        <Sports />
        <Movies />
        <FoodTravelNetwork />
        <h4>Can't decide on what to watch? Go for a run!</h4> 
      </div>
    );
  }
}

const Sports = () => {
  return (
      <div>   
          <h2>Choose a sport channel</h2>
          <SportsList />
      </div>
  )
};

const Movies = () => {
  return (
      <div>   
          <h2>Classic movies here!</h2>
          <MoviesList />
      </div>
  )
};

const FoodTravelNetwork = () => {
  return (
      <div>   
          <h2>Dare to travel or try new foods?</h2>
          <FoodTravelList />
      </div>
  )
};


export default App;
