import { Fragment } from 'react';

import classes from './RouterQParamsLayout.module.css';
import RouterQParamsMainNavigation from './RouterQParamsMainNavigation';

const RouterQParamsLayout = (props) => {
  return (
    <Fragment>
      <RouterQParamsMainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default RouterQParamsLayout;
