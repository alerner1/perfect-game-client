import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { withRouter } from 'react-router-dom';

class NavMenuLoggedOut extends React.Component {
  handleSelect = (eventKey) => {
    switch(eventKey){
    case '1':
      this.props.history.push('/login');
      break;
    case '2':
      this.props.history.push('/signup');
      break;
    default:
      break;
    }
  }

  render() {
    return (
      <>
        <Navbar variant="dark" expand="lg">
          <Navbar.Brand id="logo" className='font-weight-bold'><h3 className="my-auto">The Perfect Game</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey="1" onSelect={this.handleSelect} className="mr-auto">
              <Nav.Item>
                <Nav.Link eventKey="1">Log In</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Create Account</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default withRouter(NavMenuLoggedOut);