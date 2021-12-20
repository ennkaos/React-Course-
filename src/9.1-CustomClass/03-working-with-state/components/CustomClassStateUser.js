import { Component } from 'react';

import classes from './CustomClassStateUser.module.css';

class CustomClassStateUser extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  } 
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default CustomClassStateUser;
