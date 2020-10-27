import React from 'react';
import { connect } from 'react-redux';
import NavMenuLoggedIn from '../components/NavMenuLoggedIn';
import NavMenuLoggedOut from '../components/NavMenuLoggedOut';

class NavMenuContainer extends React.Component {
  render() {
    return (
      this.props.currentUser ? <NavMenuLoggedIn /> : <NavMenuLoggedOut />
    )
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.user.currentUser }
}

export default connect(mapStateToProps)(NavMenuContainer)