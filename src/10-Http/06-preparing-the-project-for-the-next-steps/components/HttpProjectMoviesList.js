import React from 'react';

import HttpProjectMovie from './HttpProjectMovie';
import classes from './HttpProjectMoviesList.module.css';

const HttpProjectMovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <HttpProjectMovie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default HttpProjectMovieList;
