import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import {withStyles} from '@material-ui/core/styles'
import CurrentWeather from "./current-weather/CurrentWeather";
import LocationList from "./location-list/LocationList";
import PlacesApi from '../../apis/PlacesApi';
import {TABS_STYLES, SLIDE_STYLES, SLIDE_HEIGHT} from './WeatherPageStyle';
import './WeatherPage.css';

class WeatherPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
            showLocationList: false,
            placePredictions: [],
        };
        this._handleSwipeChangeIndex = this._handleSwipeChangeIndex.bind(this);
        this._handleTabChangeIndex = this._handleTabChangeIndex.bind(this);
        this._handleToggleSearch = this._handleToggleSearch.bind(this);
        this._handleSearchChange = this._handleSearchChange.bind(this);
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
                showLocationList: status
            });
        };
    };

    _handleSearchChange() {
        const queryString = this.placeQuery.value;
        if (queryString) {
            PlacesApi.getPlacePredictions(queryString, (placePredictions) => {
                // console.log(placePredictions);
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

    _renderSearchbar() {
        const {showLocationList} = this.state;
        return (
            <div
                id="place-search-bar"
            >
                <input
                    id="place-search"
                    className={showLocationList ? 'active' : ''}
                    onFocus={this._handleToggleSearch(true)}
                    onChange={this._handleSearchChange}
                    ref={(thisEl) => {this.placeQuery = thisEl}}
                />
            </div>
        );
    };

    _renderWeatherContent() {
        const {activeTabIndex, showLocationList, placePredictions} = this.state;
        return (
            <div id="weather-page-content">
                <LocationList
                    show={showLocationList}
                    locations={placePredictions}
                    onItemClick={this._handleToggleSearch(false)}
                    onOutsideClick={this._handleToggleSearch(false)}
                />
                <SwipeableViews
                    index={activeTabIndex}
                    onChangeIndex={this._handleSwipeChangeIndex}
                    style={{height: SLIDE_HEIGHT}}
                >
                    <CurrentWeather
                        height="100%"
                    />
                    <div style={Object.assign({}, SLIDE_STYLES.slide, SLIDE_STYLES.slide2)}>Page 2</div>
                </SwipeableViews>
            </div>
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
                {this._renderWeatherContent()}
                {this._renderTabs()}
            </div>
        );
    }
}

export default withStyles(TABS_STYLES)(WeatherPage);
