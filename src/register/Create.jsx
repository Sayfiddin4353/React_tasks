import React, { Component } from 'react';

export default class Create extends Component {
  render() {
    return (
      <div>
        <div className='one'>
          <div className='two'>
            <div className='begin'>
              <h1>Create account !</h1>
            </div>

            <form className='three'>
              <div>
                <label htmlFor=''>Name:</label> <nbsp />
                <nbsp />
                <nbsp />
                <input placeholder='Enter a name...' required type='text' />
              </div>
              <div>
                <label htmlFor=''>Email:</label> <nbsp />
                <nbsp />
                <nbsp />
                <input placeholder='Enter an email...' required type='text' />
              </div>

              <div>
                <label htmlFor=''>Password :</label>
                <nbsp />
                <nbsp />
                <nbsp />
                <input
                  placeholder='Enter a password '
                  minLength={8}
                  required
                  type='text'
                />
              </div>
              <br />
              <button type='submit'>Create</button>
              <br />

              <button onClick={this.props.onClick} >Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
