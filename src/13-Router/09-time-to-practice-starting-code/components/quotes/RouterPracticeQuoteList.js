import { Fragment } from 'react';

import RouterPracticeQuoteItem from './RouterPracticeQuoteItem';
import classes from './RouterPracticeQuoteList.module.css';

const RouterPracticeQuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <RouterPracticeQuoteItem
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

export default RouterPracticeQuoteList;
