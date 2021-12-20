import React from 'react';

import HttpRequestPostMovie from './HttpRequestPostMovie';
import classes from './HttpRequestPostMoviesList.module.css';

const HttpRequestPostMovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <HttpRequestPostMovie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default HttpRequestPostMovieList;
