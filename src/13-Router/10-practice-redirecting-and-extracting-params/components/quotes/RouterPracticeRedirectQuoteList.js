import { Fragment } from 'react';

import RouterPracticeRedirectQuoteItem from './RouterPracticeRedirectQuoteItem';
import classes from './RouterPracticeRedirectQuoteList.module.css';

const RouterPracticeRedirectQuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <RouterPracticeRedirectQuoteItem
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

export default RouterPracticeRedirectQuoteList;
