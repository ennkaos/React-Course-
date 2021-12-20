import { Component } from 'react';

import classes from './CustomClassContextStartUser.module.css';

class CustomClassContextStartUser extends Component {
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

export default CustomClassContextStartUser;
