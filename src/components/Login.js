import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import request from 'superagent'

import {loginOrSignUp} from './utils'

class Login extends Component {

  handleSubmit(e) {
    e.preventDefault()

    const formData = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }

    //loginOrSignUp('/login', formData, this.props.setCurrentUser, this.mount)

    request.post('/login')
      .send({username, password})
      .end( (err,res)=>{
        if (err) this.setState = { hasError: true}
      })
  }

  //Feedback : do this by toggling state.hasError
  //
  //mount() {
    //ReactDOM.render(<p className='onError'>Username or password is incorrect</p>, document.getElementById('err'))
  //}

  //unmount() {
    //ReactDOM.unmountComponentAtNode(document.getElementById('err'))
  //}

  //componentWillUnmount() {
    //this.unmount()
  //}

  render() {
    const errorP = <p className='onError'>Username or password is incorrect</p>

    return (
      <div className="row-sm-12 row-centered text-centre">
        <div className="jumbotron col-sm-4 text-center col-centered">
          <form className="form-signin">
            <h2 className="form-signin-heading">Please login </h2>
            <input type="username" id="inputUsername" className="form-control" placeholder="Your username" ref='username' required autofocus/>
            <div id='err'></div>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref='password' required/>
            <button type="button" className="btn btn-lg btn-primary" onClick={this.handleSubmit.bind(this)}>Login</button>
          </form>
        </div>
        {
          this.state.hasError ? {errorP} : ''
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: user => {
      dispatch({
        type: 'SET_CURRENT_USER',
        user: user
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
