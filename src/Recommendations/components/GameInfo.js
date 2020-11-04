import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { addSavedRecsGame, saveSavedRecsGames } from '../../redux/actions/savedRecsGamesActions';

// we'll want some sort of "save" button and functionality in here, but we're not quite there yet
class GameInfo extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.savedRecsGames !== this.props.savedRecsGames) {
      this.props.saveSavedRecsGames(this.props.savedRecsGames);
    }
  }

  handleSave = () => {
    this.props.addSavedRecsGame(this.props.showGame);
  }

  chooseButton = () => {
    if (this.props.savedRecsGames.filter(game => {return game.name === this.props.showGame.name}).length > 0) {
      return <Button disabled className="float-right">Saved</Button>
    } else {
      return <Button onClick={this.handleSave} className="float-right">Save</Button>
    }
  }

  mapPlatforms = () => {
    if (this.props.showGame.platforms) {
      return (
        <ListGroup horizontal className="justify-content-center">
          {this.props.showGame.platforms.map(platform => { 
          return (
            <ListGroup.Item>{platform.abbreviation}</ListGroup.Item>
          )})}
        </ListGroup>
      )
    }
  }

  render(){
    return(
      this.props.showGame.name ?
      <>
        <Row>
          <Col xs={1}></Col>
          <Col>
            <h3 className="text-center">{this.props.showGame.name}</h3>
          </Col>
          <Col xs={1}>
            {this.chooseButton()}
          </Col>
        </Row>
        <h6 className="text-center">{this.props.showGame.release_date}</h6>
        {this.mapPlatforms()}
        <Row>
          <Col xs={8}>
            <p>{this.props.showGame.summary}</p>
          </Col>
          <Col xs={4}>
            <Image src={this.props.showGame.cover_url} fluid />
          </Col>
        </Row>
      </>
      :
      null
    )
  }
}

const mapStateToProps = state => {
  return {
    showGame: state.showGame,
    savedRecsGames: state.savedRecsGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSavedRecsGame: (gameObj) => dispatch(addSavedRecsGame(gameObj)),
    saveSavedRecsGames: (gamesArray) => dispatch(saveSavedRecsGames(gamesArray))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInfo);