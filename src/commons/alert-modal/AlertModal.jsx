import React from 'react';
import * as PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './AlertModal.css';

class AlertModal extends React.Component {

    constructor(props) {
        super(props);
        this._handleCloseAlert = this._handleCloseAlert.bind(this);
    };

    _handleCloseAlert() {
        setInterval(this.props.onClose, 200);
    };

    render() {
        const {open, title, content, onClose} = this.props;
        return (
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    id="alert-dialog-title"
                    classes={{
                        root: 'alert-modal-title'
                    }}
                >
                    {title || ''}
                </DialogTitle>
                <DialogContent
                    classes={{
                        root: 'alert-modal-content'
                    }}
                >
                    <DialogContentText id="alert-dialog-description">
                        {content || ''}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this._handleCloseAlert}
                        color="primary"
                        classes={{
                            textPrimary: 'alert-modal-ok-button'
                        }}
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        );

    };
};

AlertModal.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};

export default AlertModal;