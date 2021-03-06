 
var React = require('react'); 
var ReactBootstrap = require('react-bootstrap'); 
var Modal = ReactBootstrap.Modal;
import autoBind from 'react-autobind'

class SecondaryConfirmModal extends React.Component {
    render () {
        return (
            <Modal show={this.props.show} onHide={this.props.onCancel}>
                <div style={{marginTop: '120px'}}>
                    <Modal.Header>
                        <Modal.Title>{this.props.title || 'Secondary confirmation'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.props.tips}</p>
                        <a className='btn btn-warning' onClick={this.props.onConfirm}>{this.props.confirm || 'Confirm'}</a> 
                        <a className='btn btn-default' onClick={this.props.onCancel}>{this.props.cancel || 'Cancel'}</a> 
                    </Modal.Body>
                </div>
            </Modal>
        )
    }
}

module.exports = SecondaryConfirmModal

