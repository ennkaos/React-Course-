import React from 'react';

import HttpRequestUseEffectMovie from './HttpRequestUseEffectMovie';
import classes from './HttpRequestUseEffectMoviesList.module.css';

const HttpRequestUseEffectMovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <HttpRequestUseEffectMovie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default HttpRequestUseEffectMovieList;
