import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";


const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div className='container'>
      
        
      <SavedList list={savedList} />

     
      
      <div>
      <Route path='/movies/:id'>
        <Movie />
      </Route>
      </div>
      <div>
        <Route exact path='/'>
          <MovieList />
        </Route>
      </div>
    </div>
  );
};

export default App;
