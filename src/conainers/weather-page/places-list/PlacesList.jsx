import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import poweredByGoogle from '../../../assets/images/powered_by_google_on_white.png';

import './PlacesList.css';

const styles = {
    root: {
        width: '100%',
        margin: 0,
        backgroundColor: 'white',
    },
};

class PlacesList extends  React.Component {

    constructor(props) {
        super(props);
        this._handleItemClick = this._handleItemClick.bind(this);
        this._handleOutsideClick = this._handleOutsideClick.bind(this);
    };

    _handleItemClick(placeId) {
        return (e) => {
            e.stopPropagation();
            const {places} = this.props;
            const place = places.find((place) => (
                place.id === placeId
            ));
            setTimeout(() => {
                this.props.onItemClick(place);
            }, 200);
        };
    };

    _handleOutsideClick() {
        this.props.onOutsideClick();
    };

    render() {
        const {classes, show, places} = this.props;
        return (
            <div
                id="places-list-container"
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
                            Array.isArray(places) && places.length > 0
                            ? (
                                <React.Fragment>
                                    {
                                        places.map((place) => (
                                            <ListItem
                                                button
                                                key={place.id}
                                                onClick={this._handleItemClick(place.id)}
                                            >
                                                <ListItemText
                                                    primary={place.structured_formatting.main_text}
                                                    secondary={place.structured_formatting.secondary_text}
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

PlacesList.propTypes = {
    show: PropTypes.bool.isRequired,
    places: PropTypes.array,
    onItemClick: PropTypes.func,
    onOutsideClick: PropTypes.func
};

export default withStyles(styles)(PlacesList);