import { Link } from 'react-router-dom';

import classes from './RouterAddNFoundQuoteItem.module.css';

const RouterAddNFoundQuoteItem = (props) => {
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

export default RouterAddNFoundQuoteItem;
