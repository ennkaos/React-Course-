import { Fragment } from 'react';

import classes from './RouterRCodeLayout.module.css';
import RouterRCodeMainNavigation from './RouterRCodeMainNavigation';

const RouterRCodeLayout = (props) => {
  return (
    <Fragment>
      <RouterRCodeMainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default RouterRCodeLayout;
