import { Fragment } from 'react';

import classes from './RouterQDataLayout.module.css';
import RouterQDataMainNavigation from './RouterQDataMainNavigation';

const RouterQDataLayout = (props) => {
  return (
    <Fragment>
      <RouterQDataMainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default RouterQDataLayout;
