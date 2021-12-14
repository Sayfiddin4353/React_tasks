import React, { Component } from 'react';
import Create from './Create';
import Login from './login';

export default class index extends Component {
  state = {
    active: false,
  };

    render() {
        const SignIn = () => {
          this.setState({active:false})
        }
            const SignUp = () => {
              this.setState({ active: true });
            };
        return (
          <div>
            {this.state.active ? (
              <Create onClick={SignIn} />
            ) : (
              <Login onClick={SignUp} />
            )}
          </div>
        );
  }
}
