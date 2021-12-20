import { Component } from 'react';

import classes from './CustomClassLCycleUser.module.css';

class CustomClassLCycleUser extends Component {
  componentWillUnmount() {
    console.log('User will unmount!');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  } 
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default CustomClassLCycleUser;
