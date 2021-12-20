import { Component } from 'react';

import classes from './CustomClassCmpUser.module.css';

class CustomClassCmpUser extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  } 
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default CustomClassCmpUser;
