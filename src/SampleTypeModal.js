import React, { Component} from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Actions from './Actions';

class SampleTypeModal extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: this.props.show };

    this.open = this.open.bind(this);
  }

  open() {
    console.log('opening modal');
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Modal id="modalInstance"
          ref={modal => this.currentModal = modal}
          show={this.props.show}
          onHide={this.props.modalClosed}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.modalClosed}>Save Changes</Button>
            <Button onClick={this.props.modalClosed}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

function mapStateToProperties(state) {
  return {
    show: state.modal.show
  };
}

export const actionCreators = {
  modalClosed: () => {
    return {
      type: Actions.modalClosed
    };
  }
};

export default connect(mapStateToProperties, actionCreators)(SampleTypeModal);
