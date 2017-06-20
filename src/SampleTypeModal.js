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
    const labelStyleFirst = {
      marginRight: '2px'
    };
    const labelStyle = {
      marginRight: '2px',
      marginLeft: '10px'
    };
    return (
      <div>
        <Modal id="modalInstance"
          ref={modal => this.currentModal = modal}
          show={this.props.show}
          onHide={this.props.modalClosed}>
          <Modal.Header closeButton>
            <Modal.Title>Select Samples</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.text}</p>
            <div id="sample-form" className="card">
              <form>
                <label htmlFor="serum" style={labelStyleFirst}>Serum</label>
                <input type="number" name="serum" min="0" max="10" />
                <label htmlFor="plasma" style={labelStyle}>Plasma</label>
                <input type="number" name="plasma" min="0" max="10" />
                <label htmlFor="csf" style={labelStyle}>CSF</label>
                <input type="number" name="csf" min="0" max="40" />
              </form>
            </div>
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
    show: state.modal.show,
    text: state.modal.text
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
