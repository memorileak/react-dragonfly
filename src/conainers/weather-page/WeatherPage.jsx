import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import {withStyles} from '@material-ui/core/styles';
import CurrentWeather from "./current-weather/CurrentWeather";
import PlacesList from "./places-list/PlacesList";
import PlacesApi from '../../apis/PlacesApi';
import {TABS_STYLES, SLIDE_STYLES, SLIDE_HEIGHT} from './WeatherPageStyle';
import '@fortawesome/fontawesome-free';
import './WeatherPage.css';
import SearchBar from "./search-bar/SearchBar";

class WeatherPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            activeTabIndex: 0,
            searchKey: '',
            showPlacesList: false,
            placePredictions: [],
            coords: {},
        };
        this._handleSwipeChangeIndex = this._handleSwipeChangeIndex.bind(this);
        this._handleTabChangeIndex = this._handleTabChangeIndex.bind(this);
        this._handleSearchToggle = this._handleSearchToggle.bind(this);
        this._handleSearchChange = this._handleSearchChange.bind(this);
        this._handleSearchClear = this._handleSearchClear.bind(this);
        this._handleCurrentPositionClick = this._handleCurrentPositionClick.bind(this);
        this._handlePlaceListOutsideClick = this._handlePlaceListOutsideClick.bind(this);
        this._handlePlaceSelected = this._handlePlaceSelected.bind(this);
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchKey !== this.state.searchKey) {
            if (this.state.searchKey) {
                PlacesApi.getPlacePredictions(this.state.searchKey, (placePredictions) => {
                    this.setState({
                        placePredictions: placePredictions
                    })
                });
            } else {
                this.setState({
                    placePredictions: []
                });
            }
        }
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

    _handleSearchToggle(status) {
        this.setState({
            showPlacesList: status
        });
    };

    _handleSearchChange(queryString) {
        this.setState({
            searchKey: queryString
        });
    };

    _handleSearchClear() {
        this.setState({
            searchKey: '',
        });
    };

    _handleCurrentPositionClick() {
        PlacesApi.getCoordsOfCurrentPosition((coords) => {
            console.log(coords);
            this.setState({coords})
        });
    };

    _handlePlaceListOutsideClick() {
        this.setState({
            showPlacesList: false
        });
    };

    _handlePlaceSelected(place) {
        PlacesApi.getCoordsThroughGeocoding(place.place_id, (coords) => {
            console.log(coords);
            this.setState({coords})
        });
        this.setState({
            searchKey: place.structured_formatting.main_text,
            showPlacesList: false
        });
    };

    _renderSearchbar() {
        const {showPlacesList, searchKey} = this.state;
        return (
            <SearchBar
                active={showPlacesList}
                searchValue={searchKey}
                onSearchToggle={this._handleSearchToggle}
                onSearchChange={this._handleSearchChange}
                onSearchClear={this._handleSearchClear}
                onCurrentPositionClick={this._handleCurrentPositionClick}
            />
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
                    onOutsideClick={this._handlePlaceListOutsideClick}
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
