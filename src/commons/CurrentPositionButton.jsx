import React from 'react';
import * as PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core';

const BTN_STYLES = {
    root: {
        minWidth: 0,
        minHeight: 0,
        width: 30,
        height: 30,
        padding: 0,
        borderRadius: '5px',
        position: 'absolute',
        right: '8px',
        top: 'calc(50% - 15px)',
    },
};

class CurrentPositionButton extends React.Component {

    render() {
        const {classes, children} = this.props;
        return (
            <Button
                className={classes.root}
            >
                {children}
            </Button>
        );
    };

};

CurrentPositionButton.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(BTN_STYLES)(CurrentPositionButton);