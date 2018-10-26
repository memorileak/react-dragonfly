import React from 'react';
import * as PropTypes from 'prop-types';
import './CurrentWeather.css';

class CurrentWeather extends  React.Component {

    _renderTemerature() {
        return (
            <div id="cw-temperature">
                <span id="temperature-value">30</span>
                <span id="unit">&#x2103;</span>
            </div>
        );
    };

    _renderCity() {
        return (
            <div id="cw-city">
                Hanoi
            </div>
        );
    };

    render() {
        return (
            <div style={{height: this.props.height}}>
                {this._renderTemerature()}
                {this._renderCity()}
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