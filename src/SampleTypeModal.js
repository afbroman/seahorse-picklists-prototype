import React, { Component} from 'react';
import { Modal, Button } from 'react-bootstrap';

class SampleTypeModal extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    console.log('opening modal');
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Button onClick={this.open}>Show Modal</Button>
        <Modal id="modalInstance"
          ref={modal => this.currentModal = modal}
          show={this.state.showModal}
          onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Save Changes</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default SampleTypeModal;
