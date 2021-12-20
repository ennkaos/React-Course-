import { Fragment } from 'react';

import classes from './RouterAddDataLayout.module.css';
import RouterAddDataMainNavigation from './RouterAddDataMainNavigation';

const RouterAddDataLayout = (props) => {
  return (
    <Fragment>
      <RouterAddDataMainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default RouterAddDataLayout;
