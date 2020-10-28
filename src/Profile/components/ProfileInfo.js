import React from 'react';
import { connect } from 'react-redux';

class ProfileInfo extends React.Component {
  render() {
    return(
      <>
        <h3 className="text-center">{this.props.currentUser.email}</h3>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(ProfileInfo);