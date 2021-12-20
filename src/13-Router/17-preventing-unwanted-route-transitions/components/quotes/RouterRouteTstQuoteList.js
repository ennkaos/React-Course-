import { Fragment } from 'react';

import RouterRouteTstQuoteItem from './RouterRouteTstQuoteItem';
import classes from './RouterRouteTstQuoteList.module.css';

const RouterRouteTstQuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <RouterRouteTstQuoteItem
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

export default RouterRouteTstQuoteList;
