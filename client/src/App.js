import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";


const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Router>
        
      <SavedList list={savedList} />

     
      

      <Route path='/' component={MovieList}/>
      <Route path='./Movies/:id' render={props =>
      {const { id } = props.match.params; 
      return <Movie />
      }
      }/>
      
      </Router> 
    </div>
  );
};

export default App;
