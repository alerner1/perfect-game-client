import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

const PlayedGameModal = (props) => {

  const mapPlatforms = () => {
    return props.game.platforms.map(platform => <ListGroup.Item>{platform.abbreviation}</ListGroup.Item>)
  }

  return (
    <>
      <Modal show={props.showProp} onHide={props.closeModal} size="lg">
        <Modal.Header className="w-100" closeButton>
          <Modal.Title className="w-100 text-center">{props.game.name} ({props.game.release_date})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={3}>
              <Image className="p-0" src={props.game.cover_url} style={{height: '30vh'}} thumbnail fluid />
            </Col>
            <Col>
              <Row>
                <Col>
                  <ListGroup className="justify-content-center" horizontal>
                    {mapPlatforms()}
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className='mt-2'>{props.game.summary}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PlayedGameModal;