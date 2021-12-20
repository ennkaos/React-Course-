import { Component } from 'react';

import classes from './CustomClassContextFinishedUser.module.css';

class CustomClassContextFinishedUser extends Component {
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

export default CustomClassContextFinishedUser;
