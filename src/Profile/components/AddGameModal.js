import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import GameSearchBar from '../../Signup/components/GameSearchBar';
import SearchResultsList from '../../Signup/components/SearchResultsList';

const AddGameModal = (props) => {

  return (
    <>
      <Modal dialogClassName="add-game-modal" scrollable show={props.showProp} onHide={props.closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">Add Played Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GameSearchBar />
          <SearchResultsList parent='profile' />
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

export default AddGameModal;