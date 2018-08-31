import * as React from "react";
import User from '../interfaces/User';

let Logo = "https://logrocket.com/img/logo.png";

export default class FirstComponent extends React.Component<User, {}> {
  constructor(props: User) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>User Component</h1>
        Hello, {this.props.name}
        <br />
        You are {this.props.age} years old,
        <br />
        You live at: {this.props.address}
        <br />
        you were born: {this.props.dob.toDateString()}
      </div>
    );
  }
}
