import { Link } from 'react-router-dom';

import classes from './RouterLinksMainHeader.module.css';

const RouterLinksMainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to='/welcome'>Welcome</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default RouterLinksMainHeader;
