import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className='one'>
        <div className='two'>
          <div className='begin'>
            <h1>Welcome !</h1>
            <p>Sign in to your account</p>
          </div>

          <form className='three'>
            <div>
              <label htmlFor=''>Name:</label> <nbsp />
              <nbsp />
              <nbsp />
              <input
                name='name'
                placeholder='Enter a name...'
                required
                type='text'
              />
            </div>

            <div>
              <label htmlFor=''>Password :</label>
              <nbsp />
              <nbsp />
              <nbsp />
              <input
                name='password'
                placeholder='Enter a password '
                minLength={8}
                required
                type='text'
              />
            </div>
            <br />
            <button onClick={this.props.onClick}>Create account ?</button>
            <br />
            <br />
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }
}
