import React from 'react';

import HttpMovie from './HttpMovie';
import classes from './HttpMoviesList.module.css';

const HttpMovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <HttpMovie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default HttpMovieList;
