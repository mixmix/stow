import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Header extends Component {

  handleSubmit(e) {
    e.preventDefault()
    request.post('/logout')
      .end((err,res) => {
        if(err) console.log('ERROR ', err)
        else console.log('Server SAYS: ', res.body)
      })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <Link to='/Upload'>
              <button type='button' className='btn btn-med btn-info right'>Upload</button>
            </Link>
            <Link to='/'>
              <button type='button' className='btn btn-med btn-info right'>Home</button>
            </Link>
            <Link to='/Login'>
              <button type='button' className='pull-right btn btn-med btn-info right'>Login</button>
            </Link>
            <button type='button' className='pull-right btn btn-med btn-info right' onclick={this.handleSubmit.bind(this)}>Logout</button>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Header)
