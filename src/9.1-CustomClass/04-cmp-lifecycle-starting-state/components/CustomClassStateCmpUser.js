import { Component } from 'react';

import classes from './CustomClassStateCmpUser.module.css';

class CustomClassStateCmpUser extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  } 
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default CustomClassStateCmpUser;
