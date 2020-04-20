import React from 'react';

const MovieCard = props => {
  return(
    <div className="movie-card">
      <h2>{props.movie.title}</h2>
      <div className="movie-director">
      Director
      </div>
      
    </div>
  );
};

export default MovieCard;
