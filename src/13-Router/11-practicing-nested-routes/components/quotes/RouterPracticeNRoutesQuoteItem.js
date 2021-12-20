import { Link } from 'react-router-dom';

import classes from './RouterPracticeNRoutesQuoteItem.module.css';

const RouterPracticeNRoutesQuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default RouterPracticeNRoutesQuoteItem;
