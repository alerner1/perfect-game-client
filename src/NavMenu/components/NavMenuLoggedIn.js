import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { connect } from 'react-redux';
import { resetUser, resetSignupStep, userLogout } from '../../actions/userActions';
import { resetGames } from '../../actions/gamesActions';
import Navbar from 'react-bootstrap/Navbar';
import { withRouter } from 'react-router-dom';

class NavMenuLoggedIn extends React.Component {
  handleSelect = (eventKey) => {
    switch(eventKey){
    case '1':
      this.props.history.push('/profile')
      break;
    case '5':
      localStorage.removeItem("token");
      this.props.userLogout()
      this.props.history.push('/login')
      break;
    default:
      break;
    }
  }

  render() {
    return (
      <>
        <Navbar expand="lg">
          <Navbar.Brand>The Perfect Game</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey="1" onSelect={this.handleSelect} className="mr-auto">
              <Nav.Item>
                <Nav.Link eventKey="1">Profile</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Game Lists" id="nav-dropdown">
                <NavDropdown.Item eventKey="2.1">Owned Games</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.2">Wish List</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.3">Saved Recommendations</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link eventKey="3">Quick Recommendations</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">Advanced Recommendations</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5">Log Out</Nav.Link>
              </Nav.Item>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetUser: () => dispatch(resetUser()),
    resetGames: () => dispatch(resetGames()),
    resetSignupStep: () => dispatch(resetSignupStep()),
    userLogout: () => dispatch(userLogout())    
  }
};

export default connect(null, mapDispatchToProps)(withRouter(NavMenuLoggedIn));