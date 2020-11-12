import React from 'react';
import CustomLikedGame from './CustomLikedGame';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { unlikeGame } from '../../redux/actions/gamesActions';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContinueButton from './ContinueButton';

class CustomLikedGamesList extends React.Component {
  handleRemove = (game) => {
    this.props.unlikeGame(game)
  }

  mapGames = () => {
    return this.props.displayGames.map(game => {
      if (game.liked === 1) {
        return <CustomLikedGame game={game} handleRemove={this.handleRemove} />
      } else {
        return null;
      }
    })
  }

  render(){
    return(
      <Card style={{height: '18rem'}} className="mb-2">
        <Card.Body>
          <Card.Title className="text-center">
            <Row>
              <Col>
              </Col>
              <Col>
                Liked Games
              </Col>
              <Col>
                <ContinueButton />
              </Col>
            </Row>
          </Card.Title>
          {
            this.props.displayGames.length === 0 ?
            <Card.Text className="text-center">Search below to add more games you enjoyed!</Card.Text>
            :
          <ListGroup style={{height: '13rem', overflow: 'auto'}}>
            {this.mapGames()}
          </ListGroup>
          }
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    displayGames: state.games.displayGames.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    unlikeGame: (gameObj) => dispatch(unlikeGame(gameObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomLikedGamesList);