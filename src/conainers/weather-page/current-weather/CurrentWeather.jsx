import React from 'react';
import * as PropTypes from 'prop-types';
import './CurrentWeather.css';

class CurrentWeather extends  React.Component {

    _renderTemerature() {
        return (
            <div id="cw-temperature">
                <span id="temperature-value">24</span>
                <span id="unit">&#x2103;</span>
            </div>
        );
    };

    _renderStatusAndCity() {
        return (
            <div id="cw-status-city">
                <i id="cw-weather-icon" className="wi wi-day-cloudy" />
                <span id="cw-city-name">Ho chi minh City</span>
            </div>
        );
    };

    _renderInformations() {
        return (
            <div id="cw-detail-info">
                <div id="cw-info-container">
                    <div className="cw-info">
                        <div className="cw-info-title">
                            Sky:
                        </div>
                        <div className="cw-info-value">
                            Cloudy
                        </div>
                    </div>
                    <div className="cw-info">
                        <div className="cw-info-title">
                            Wind speed:
                        </div>
                        <div className="cw-info-value">
                             3.5 km/h
                        </div>
                    </div>
                    <div className="cw-info">
                        <div className="cw-info-title">
                            Cloudiness:
                        </div>
                        <div className="cw-info-value">
                             78%
                        </div>
                    </div>
                    <div className="cw-info">
                        <div className="cw-info-title">
                            Humidity:
                        </div>
                        <div className="cw-info-value">
                             82%
                        </div>
                    </div>
                    <div className="cw-info">
                        <div className="cw-info-title">
                            Pressure:
                        </div>
                        <div className="cw-info-value">
                             1018 hPa
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div
                id="cw-body"
                style={{height: this.props.height}}
                className="animated fadeIn"
            >
                <div id="cw-panel1" className="cw-panel">
                    <div>
                        {this._renderTemerature()}
                        {this._renderStatusAndCity()}
                    </div>
                </div>
                <div id="cw-panel2" className="cw-panel">
                    {this._renderInformations()}
                </div>
            </div>
        );
    };

};

CurrentWeather.propTypes = {
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
};

export default CurrentWeather;