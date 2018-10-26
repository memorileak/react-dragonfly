import React, {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import {withStyles} from '@material-ui/core/styles'
import './WeatherPage.css';
import CurrentWeather from "./current-weather/CurrentWeather";

const TABS_HEIGHT = 50;
const SLIDE_HEIGHT = window.innerHeight - TABS_HEIGHT;

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
        height: 4,
        borderRadius: 2
    },
    tabLabelStyle: {
        fontWeight: 'bold',
        textTransform: 'none'
    }
};
const SLIDE_STYLES = {
    slide: {
        padding: 15,
        height: window.innerHeight - TABS_HEIGHT,
        color: '#fff',
    },
};

class WeatherPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0
        };
        this._handleSwipeChangeIndex = this._handleSwipeChangeIndex.bind(this);
        this._handleTabChangeIndex = this._handleTabChangeIndex.bind(this);
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

    _renderSwipeableViews() {
        const {activeTabIndex} = this.state;
        return (
            <SwipeableViews
                index={activeTabIndex}
                onChangeIndex={this._handleSwipeChangeIndex}
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
                    label="Current"
                    classes={{
                        root: classes.tabRootStyle,
                        label: classes.tabLabelStyle
                    }}
                />
                <Tab
                    label="5 days forecast"
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
                {this._renderSwipeableViews()}
                {this._renderTabs()}
            </div>
        );
    }
}

export default withStyles(TABS_STYLES)(WeatherPage);
