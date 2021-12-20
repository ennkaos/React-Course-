import { Fragment } from 'react';

import classes from './RouterFinishedLayout.module.css';
import RouterFinishedMainNavigation from './RouterFinishedMainNavigation';

const RouterFinishedLayout = (props) => {
  return (
    <Fragment>
      <RouterFinishedMainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default RouterFinishedLayout;
