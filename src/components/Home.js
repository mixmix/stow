import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello to {this.props.title}</h1>
        <Link to="/">Home</Link><br></br>
        <Link to="/PageTwo">Go to pageTwo</Link>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Home)