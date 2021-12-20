import { Fragment } from 'react';

import classes from './RouterRouteTstLayout.module.css';
import RouterRouteTstMainNavigation from './RouterRouteTstMainNavigation';

const RouterRouteTstLayout = (props) => {
  return (
    <Fragment>
      <RouterRouteTstMainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default RouterRouteTstLayout;
