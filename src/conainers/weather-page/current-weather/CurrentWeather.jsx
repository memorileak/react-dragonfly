import React from 'react';
import * as PropTypes from 'prop-types';
import WeatherService from '../../../services/WeatherService';
import {WEATHER_ICONS} from '../../../constants/WeatherIcon';
import './CurrentWeather.css';
import AlertModal from "../../../commons/alert-modal/AlertModal";

class CurrentWeather extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isHaveError: false,
        };
    };

    componentDidMount() {
        const {active, longitude, latitude} = this.props;
        if (active && longitude && latitude) {
            WeatherService.getCurrentWeather({longitude, latitude}, (data) => {
                this.setState({data});
            });
        }
    };

    componentDidUpdate(prevProps) {
        const {active, longitude, latitude} = this.props;
        if (
            active && longitude && latitude && (
                prevProps.active !== active
                || prevProps.longitude !== longitude
                || prevProps.latitude !== latitude
            )
        ) {
            WeatherService.getCurrentWeather({longitude, latitude}, (data) => {
                this.setState({data});
            });
        }
    };

    _renderTemerature() {
        const {data} = this.state;
        return (
            <div id="cw-temperature">
                <span id="temperature-value">{Math.round(data.main.temp)}</span>
                <span id="unit">&#x2103;</span>
            </div>
        );
    };

    _renderStatusAndCity() {
        const {data} = this.state;
        return (
            <div id="cw-status-city">
                <i id="cw-weather-icon" className={`wi ${WEATHER_ICONS[data.weather[0].icon]}`} />
                <span id="cw-city-name">{data.name}</span>
            </div>
        );
    };

    _renderInformations() {
        const {data} = this.state;
        return (
            <div id="cw-detail-info">
                <div id="cw-info-container">
                    <div className="cw-info">
                        <div className="cw-info-title">
                            Sky:
                        </div>
                        <div className="cw-info-value">
                            {data.weather[0].description}
                        </div>
                    </div>
                    <div className="cw-info">
                        <div className="cw-info-title">
                            Wind speed:
                        </div>
                        <div className="cw-info-value">
                             {data.wind.speed} m/s
                        </div>
                    </div>
                    <div className="cw-info">
                        <div className="cw-info-title">
                            Cloudiness:
                        </div>
                        <div className="cw-info-value">
                            {data.clouds.all}%
                        </div>
                    </div>
                    <div className="cw-info">
                        <div className="cw-info-title">
                            Humidity:
                        </div>
                        <div className="cw-info-value">
                             {data.main.humidity}%
                        </div>
                    </div>
                    <div className="cw-info">
                        <div className="cw-info-title">
                            Pressure:
                        </div>
                        <div className="cw-info-value">
                             {data.main.pressure} hPa
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    _renderErrorAlert() {
        const {isHaveError} = this.state;
        return (
            <AlertModal
                open={isHaveError}
                onClose={() => {this.setState({isHaveError: false})}}
                title="Something went wrong !!!"
                content="Sorry, we couldn't serve your request right now. Please try again later."
            />
        );
    };

    render() {
        const {data} = this.state;
        if (data) {
            return (
                <React.Fragment>
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
                    {this._renderErrorAlert()}
                </React.Fragment>
            );
        } else {
            return null;
        }
    };

};

CurrentWeather.propTypes = {
    active: PropTypes.bool.isRequired,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    longitude: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    latitude: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

export default CurrentWeather;