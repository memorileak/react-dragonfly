import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import poweredByGoogle from '../../../assets/images/powered_by_google_on_white.png';

import './LocationList.css';

const styles = {
    root: {
        width: '100%',
        margin: 0,
        backgroundColor: 'white',
    },
};

class LocationList extends  React.Component {

    constructor(props) {
        super(props);
        this._handleItemClick = this._handleItemClick.bind(this);
        this._handleOutsideClick = this._handleOutsideClick.bind(this);
    };

    _handleItemClick(e) {
        e.stopPropagation();
        setTimeout(() => {
            this.props.onItemClick();
        }, 200);
    };

    _handleOutsideClick() {
        this.props.onOutsideClick();
    };

    render() {
        const {classes, show, locations} = this.props;
        return (
            <div
                id="location-list-container"
                className={
                    show
                    ? 'animated fadeIn'
                    : 'hide'
                }
                onClick={this._handleOutsideClick}
            >
                <div className={classes.root}>
                    <List component="nav">
                        {
                            Array.isArray(locations) && locations.length > 0
                            ? (
                                <React.Fragment>
                                    {
                                        locations.map((location) => (
                                            <ListItem
                                                button
                                                key={location.id}
                                                onClick={this._handleItemClick}
                                            >
                                                <ListItemText
                                                    primary={location.structured_formatting.main_text}
                                                    secondary={location.structured_formatting.secondary_text}
                                                />
                                            </ListItem>
                                        ))
                                    }
                                    <ListItem>
                                        <div
                                            id="google-attribution"
                                        >
                                            <img alt="Powered by Google" src={poweredByGoogle} />
                                        </div>
                                    </ListItem>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <ListItem>
                                        <div
                                            id="empty-list-item"
                                            className="text-center"
                                        >
                                            <small>No places to show</small>
                                        </div>
                                    </ListItem>
                                    <ListItem>
                                        <div
                                            id="google-attribution"
                                            className="text-center"
                                        >
                                            <img alt="Powered by Google" src={poweredByGoogle} />
                                        </div>
                                    </ListItem>
                                </React.Fragment>
                            )
                        }
                    </List>
                </div>
            </div>
        );
    };

};

LocationList.propTypes = {
    show: PropTypes.bool.isRequired,
    locations: PropTypes.array,
    onItemClick: PropTypes.func,
    onOutsideClick: PropTypes.func
};

export default withStyles(styles)(LocationList);