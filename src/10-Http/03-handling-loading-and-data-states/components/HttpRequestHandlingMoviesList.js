import React from 'react';

import HttpRequestHandlingMovie from './HttpRequestHandlingMovie';
import classes from './HttpRequestHandlingMoviesList.module.css';

const HttpRequestHandlingMovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <HttpRequestHandlingMovie
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default HttpRequestHandlingMovieList;
