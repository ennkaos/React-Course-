import React from 'react';

import HttpRequestMovie from './HttpRequestMovie';
import classes from './HttpRequestMoviesList.module.css';

const HttpRequestMovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <HttpRequestMovie
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default HttpRequestMovieList;
