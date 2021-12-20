import { Fragment } from 'react';

import RouterAddWrapperQuoteItem from './RouterAddWrapperQuoteItem';
import classes from './RouterAddWrapperQuoteList.module.css';

const RouterAddWrapperQuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <RouterAddWrapperQuoteItem
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

export default RouterAddWrapperQuoteList;
