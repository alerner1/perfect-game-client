import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import { resetUser, resetSignupStep, userLogout } from '../../redux/actions/userActions';
import { resetGames } from '../../redux/actions/gamesActions';
import Navbar from 'react-bootstrap/Navbar';
import { withRouter } from 'react-router-dom';

class NavMenuLoggedIn extends React.Component {
  state = {
    dropdown: false
  }

  handleSelect = (eventKey) => {
    switch (eventKey) {
      case '1':
        this.props.history.push('/game_lists/played_games')
        break;
      case '2':
        this.props.history.push('/game_lists/owned_games');
        break;
      case '3':
        this.props.history.push('/game_lists/wishlist');
        break;
      case '4':
        this.props.history.push('/game_lists/saved_recommendations');
        break;
      case '5':
        this.props.history.push('/quick_recommendations');
        break;
      case '6':
        this.props.history.push('/advanced_recommendations/new');
        break;
      case '7':
        localStorage.removeItem("token");
        this.props.userLogout()
        this.props.history.push('/login')
        break;
      default:
        break;
    }
  }

  handleDropdown = () => {
    this.setState(prev => ({ dropdown: !prev.dropdown }))
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
                <Nav.Link eventKey="1">Played Games</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Owned Games</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">Wish List</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">Saved Recommendations</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5">Quick Recommendations</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="6">Advanced Recommendations</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="7">Log Out</Nav.Link>
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