import { Fragment } from 'react';

import classes from './RouterAddNFoundLayout.module.css';
import RouterAddNFoundMainNavigation from './RouterAddNFoundMainNavigation';

const RouterAddNFoundLayout = (props) => {
  return (
    <Fragment>
      <RouterAddNFoundMainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default RouterAddNFoundLayout;
