import { Fragment } from 'react';

import RouterAddNFoundQuoteItem from './RouterAddNFoundQuoteItem';
import classes from './RouterAddNFoundQuoteList.module.css';

const RouterAddNFoundQuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <RouterAddNFoundQuoteItem
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

export default RouterAddNFoundQuoteList;
