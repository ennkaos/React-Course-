import { Fragment } from 'react';

import classes from './RouterNavLayout.module.css';
import RouterNavMainNavigation from './RouterNavMainNavigation';

const RouterNavLayout = (props) => {
  return (
    <Fragment>
      <RouterNavMainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default RouterNavLayout;
