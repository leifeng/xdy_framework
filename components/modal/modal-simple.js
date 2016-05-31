import React, {Component} from 'react';
import Modal from 'react-modal';
const style = {
    overlay: {
        zIndex: '10'
    },
    content: {
        width: '300px',
        height: '100px'
    }
}
export default class ModalSimple extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.modalIsOpen !== this.props.modalIsOpen;
    }

    render() {
        console.log('render modal')
        const {modalIsOpen, onCloseModal, onConfirmModal, msg, children, title} = this.props;
        return (
            <Modal
                className="Modal__Bootstrap  modal-dialog"
                isOpen={modalIsOpen}
                closeTimeoutMS={50}
                onRequestClose={onCloseModal}
                style={style}>

                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={onCloseModal}>
                            <span aria-hidden="true">&times; </span>
                            <span className="sr-only">Close</span>
                        </button>
                        <h4 className="modal-title">{title}</h4>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick={onCloseModal}>关闭</button>
                        <button type="button" className="btn btn-primary" onClick={onConfirmModal}>确认</button>
                    </div>
                </div>

            </Modal>
        )
    }
};
ModalSimple.propTypes = {
    modalIsOpen: React.PropTypes.bool,
    onCloseModal: React.PropTypes.func,
    onConfirmModal: React.PropTypes.func,
    children: React.PropTypes.element,
    title: React.PropTypes.string,
    msg: React.PropTypes.string
};
