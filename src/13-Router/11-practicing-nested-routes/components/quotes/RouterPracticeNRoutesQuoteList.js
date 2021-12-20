import { Fragment } from 'react';

import RouterPracticeNRoutesQuoteItem from './RouterPracticeNRoutesQuoteItem';
import classes from './RouterPracticeNRoutesQuoteList.module.css';

const RouterPracticeNRoutesQuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <RouterPracticeNRoutesQuoteItem
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

export default RouterPracticeNRoutesQuoteList;
