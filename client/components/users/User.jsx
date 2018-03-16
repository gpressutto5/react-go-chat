import React, {Component} from 'react'
import PropTypes from 'prop-types'

class User extends React.Component {
  render(){
    return (
      <li>
        {this.props.user.name}
      </li>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User
