import { Fragment } from 'react';

import RouterAddDataQuoteItem from './RouterAddDataQuoteItem';
import classes from './RouterAddDataQuoteList.module.css';

const RouterAddDataQuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <RouterAddDataQuoteItem
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

export default RouterAddDataQuoteList;
