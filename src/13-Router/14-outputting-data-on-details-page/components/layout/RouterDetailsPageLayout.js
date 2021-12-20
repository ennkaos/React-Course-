import { Fragment } from 'react';

import classes from './RouterDetailsPageLayout.module.css';
import RouterDetailsPageMainNavigation from './RouterDetailsPageMainNavigation';

const RouterDetailsPageLayout = (props) => {
  return (
    <Fragment>
      <RouterDetailsPageMainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default RouterDetailsPageLayout;
