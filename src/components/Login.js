import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import request from 'superagent'

class Login extends Component {

  handleSubmit(e){
    e.preventDefault()
    const formData = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    // request.get('http://localhost:3000/ajax')
    //   .end(()=>{console.log('done')})

    request.post('http://localhost:3000/login')
      .send(formData)
      .end((err, res)=>{
        console.log('hi')
        if(err) console.log('ERROR ', err)
        else {
          this.refs.username=''
          this.refs.password=''
          console.log('Server REsponse',res.body)
        }
      })
  }

  render() {
    return (
      <div className="jumbotron col-sm-4 text-center col-centered">
        <form className="form-signin">
          <h2 className="form-signin-heading">Please login </h2>
          <label className="sr-only">Username</label>
          <input type="username" id="inputUsername" className="form-control" placeholder="Your username" ref='username' required autofocus/>
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref='password' required/>
        <button type="button" className="btn btn-lg btn-primary" onClick={this.handleSubmit.bind(this)}>Login</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Login)
