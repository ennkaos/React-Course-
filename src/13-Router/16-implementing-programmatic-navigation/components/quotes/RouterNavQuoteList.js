import { Fragment } from 'react';

import RouterNavQuoteItem from './RouterNavQuoteItem';
import classes from './RouterNavQuoteList.module.css';

const RouterNavQuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <RouterNavQuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default RouterNavQuoteList;
