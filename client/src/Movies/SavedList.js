import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function goBack() {
  window.history.back();
}

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">
     <Route path='/movies'></Route>
      
      
      <button onClick="goBack()">Home</button>
      
    </div>
  </div>
);

export default SavedList;
