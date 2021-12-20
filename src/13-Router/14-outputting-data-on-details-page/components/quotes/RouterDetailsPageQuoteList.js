import { Fragment } from 'react';

import RouterDetailsPageQuoteItem from './RouterDetailsPageQuoteItem';
import classes from './RouterDetailsPageQuoteList.module.css';

const RouterDetailsPageQuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <RouterDetailsPageQuoteItem
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

export default RouterDetailsPageQuoteList;
