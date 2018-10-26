import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import {withStyles} from '@material-ui/core/styles'
import CurrentWeather from "./current-weather/CurrentWeather";
import LocationList from "./location-list/LocationList";
import './WeatherPage.css';

const TABS_HEIGHT = 50;
const SEARCH_BAR_HEIGHT = 60;
const SLIDE_HEIGHT = window.innerHeight - TABS_HEIGHT - SEARCH_BAR_HEIGHT;

const TABS_STYLES = {
    tabsRootStyle: {
        color: 'white',
        height: TABS_HEIGHT
    },
    tabRootStyle: {
        height: TABS_HEIGHT
    },
    indicatorStyle: {
        backgroundColor: 'white',
        height: 1,
        borderRadius: 1
    },
    tabLabelStyle: {
        fontWeight: 'bold',
        textTransform: 'none'
    }
};
const SLIDE_STYLES = {
    slide: {
        padding: 15,
        height: SLIDE_HEIGHT,
        color: 'white',
    },
};

class WeatherPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
            showLocationList: false,
        };
        this._handleSwipeChangeIndex = this._handleSwipeChangeIndex.bind(this);
        this._handleTabChangeIndex = this._handleTabChangeIndex.bind(this);
        this._handleToggleSearch = this._handleToggleSearch.bind(this);
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

    _renderSearchbar() {
        return (
            <div
                id="place-search-bar"
                style={{
                    height: SEARCH_BAR_HEIGHT
                }}
            >
                <input
                    id="place-search"
                    onFocus={this._handleToggleSearch(true)}
                    onBlur={this._handleToggleSearch(false)}
                />
            </div>
        );
    };

    _renderWeatherContent() {
        const {activeTabIndex, showLocationList} = this.state;
        return (
            <div id="weather-page-content">
                <LocationList
                    show={showLocationList}
                />
                <SwipeableViews
                    index={activeTabIndex}
                    onChangeIndex={this._handleSwipeChangeIndex}
                >
                    <CurrentWeather
                        height={SLIDE_HEIGHT}
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
