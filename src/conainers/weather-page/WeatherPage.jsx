import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import {withStyles} from '@material-ui/core/styles';
import CurrentPositionButton from '../../commons/CurrentPositionButton';
import CurrentWeather from "./current-weather/CurrentWeather";
import PlacesList from "./places-list/PlacesList";
import PlacesApi from '../../apis/PlacesApi';
import {TABS_STYLES, SLIDE_STYLES, SLIDE_HEIGHT} from './WeatherPageStyle';
import '@fortawesome/fontawesome-free';
import './WeatherPage.css';

class WeatherPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
            showPlacesList: false,
            placePredictions: [],
        };
        this._handleSwipeChangeIndex = this._handleSwipeChangeIndex.bind(this);
        this._handleTabChangeIndex = this._handleTabChangeIndex.bind(this);
        this._handleToggleSearch = this._handleToggleSearch.bind(this);
        this._handleSearchChange = this._handleSearchChange.bind(this);
        this._handleSearchCancel = this._handleSearchCancel.bind(this);
        this._handlePlaceSelected = this._handlePlaceSelected.bind(this);
    };

    _handleSwipeChangeIndex(index) {
        this.setState({
            activeTabIndex: index
        });
    };

    _handleTabChangeIndex(e, index) {
        this.setState({
            activeTabIndex: index
        });
    }

    _handleToggleSearch(status) {
        return () => {
            this.setState({
                showPlacesList: status
            });
        };
    };

    _handleSearchChange() {
        const queryString = this.placeQuery.value;
        if (queryString) {
            PlacesApi.getPlacePredictions(queryString, (placePredictions) => {
                this.setState({
                    placePredictions: placePredictions
                })
            });
        } else {
            this.setState({
                placePredictions: []
            })
        };
    };

    _handleSearchCancel() {
        const queryString = this.placeQuery.value;
        if (queryString) {
            this.placeQuery.value = "";
            this.placeQuery.focus();
            this.setState({
                placePredictions: []
            })
        } else {
            this.setState({
                showPlacesList: false,
                placePredictions: []
            })
        };
    };

    _handlePlaceSelected(place) {
        this.placeQuery.value = place.structured_formatting.main_text;
        PlacesApi.getCoordsThroughGeocoding(place.place_id, (coords) => {
            console.log(coords);
        });
        this.setState({
            showPlacesList: false
        });
    };

    _renderSearchbar() {
        const {showPlacesList} = this.state;
        return (
            <div
                id="place-search-bar"
                className={showPlacesList ? 'active' : ''}
            >
                <input
                    id="place-search"
                    className={showPlacesList ? 'active' : ''}
                    placeholder="Search city"
                    onFocus={this._handleToggleSearch(true)}
                    onChange={this._handleSearchChange}
                    ref={(thisEl) => {this.placeQuery = thisEl}}
                />
                {
                    showPlacesList
                    ? (
                        <span
                            id="place-search-delete"
                            className="fas fa-times animated fadeIn"
                            onClick={this._handleSearchCancel}
                        />
                    ) : (
                        <React.Fragment>
                            <span
                                id="place-search-lookup"
                                className="fas fa-search animated fadeIn"
                                onClick={() => {this.placeQuery.focus()}}
                            />
                            <CurrentPositionButton>
                                <span
                                    id="place-current-position"
                                    className="fas fa-crosshairs animated fadeIn"
                                    // onClick={() => {this.placeQuery.focus()}}
                                />
                            </CurrentPositionButton>
                        </React.Fragment>
                    )
                }
            </div>
        );
    };

    _renderContent() {
        const {showPlacesList, placePredictions} = this.state;
        return (
            <div id="weather-page-content">
                <PlacesList
                    show={showPlacesList}
                    places={placePredictions}
                    onItemClick={this._handlePlaceSelected}
                    onOutsideClick={this._handleToggleSearch(false)}
                />
                {this._renderWeatherContent()}
                {this._renderTabs()}
            </div>
        );
    };

    _renderWeatherContent() {
        const {activeTabIndex} = this.state;
        return (
            <SwipeableViews
                index={activeTabIndex}
                onChangeIndex={this._handleSwipeChangeIndex}
                style={{height: SLIDE_HEIGHT}}
            >
                <CurrentWeather
                    height={SLIDE_HEIGHT}
                />
                <div style={Object.assign({}, SLIDE_STYLES.slide, SLIDE_STYLES.slide2)}>Page 2</div>
            </SwipeableViews>
        );
    };

    _renderTabs() {
        const {classes} = this.props;
        const {activeTabIndex} = this.state;
        return (
            <Tabs
                fullWidth
                classes={{
                    root: classes.tabsRootStyle,
                    indicator: classes.indicatorStyle
                }}
                value={activeTabIndex}
                onChange={this._handleTabChangeIndex}
            >
                <Tab
                    label="Current weather"
                    classes={{
                        root: classes.tabRootStyle,
                        label: classes.tabLabelStyle
                    }}
                />
                <Tab
                    label="5-day forecast"
                    classes={{
                        root: classes.tabRootStyle,
                        label: classes.tabLabelStyle
                    }}
                />
            </Tabs>
        );
    };

    render() {
        return (
            <div
                id="weather-page"
                style={{
                    height: window.innerHeight
                }}
            >
                {this._renderSearchbar()}
                {this._renderContent()}
            </div>
        );
    }
}

export default withStyles(TABS_STYLES)(WeatherPage);
