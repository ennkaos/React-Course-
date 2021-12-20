import { Fragment } from 'react';

import classes from './RouterAddWrapperLayout.module.css';
import RouterAddWrapperMainNavigation from './RouterAddWrapperMainNavigation';

const RouterAddWrapperLayout = (props) => {
  return (
    <Fragment>
      <RouterAddWrapperMainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default RouterAddWrapperLayout;
