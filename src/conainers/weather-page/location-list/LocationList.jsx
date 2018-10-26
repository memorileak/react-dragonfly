import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './LocationList.css';

const styles = {
    root: {
        width: '100%',
        margin: 0,
        backgroundColor: 'white',
    },
};

class LocationList extends  React.Component {

    render() {
        const {classes, show} = this.props;
        return (
            <div
                id="location-list-container"
                className={show ? '' : 'hide'}
            >
                <div className={classes.root}>
                    <List component="nav">
                        <ListItem button>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Trash" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Spam" />
                        </ListItem>
                    </List>
                </div>
            </div>
        );
    };

};

LocationList.propTypes = {
    show: PropTypes.bool.isRequired,
};

export default withStyles(styles)(LocationList);