import React from 'react';
import * as PropTypes from 'prop-types';
import WeatherService from '../../../services/WeatherService';
import AlertModal from "../../../commons/alert-modal/AlertModal";
import Spinner from "../../../commons/spinner/Spinner";
import {SLIDE_HEIGHT} from '../../weather-page/WeatherPageStyle';
import {WEATHER_ICONS} from '../../../constants/WeatherIcon';
import TimeUtils from '../../../utils/TimeUtils';
import './FivedaysWeather.css';

const MS_PER_SECOND = 1e3;

class FivedaysWeather extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isHaveError: false,
            isLoading: false,
            activeItemIndex: 0,
        };
        this._handleBriefForecastItemClick = this._handleBriefForecastItemClick.bind(this);
    };

    componentDidMount() {
        const {active, longitude, latitude} = this.props;
        if (active && longitude && latitude) {
            this.setState({
                isLoading: true,
            });
            WeatherService.getFivedaysForecast({longitude, latitude}, (data) => {
                this.setState({
                    data: data,
                    isLoading: false,
                });
            }, () => {
                this.setState({
                    isLoading: false,
                    isHaveError: true,
                })
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
            this.setState({
                isLoading: true,
            });
            WeatherService.getFivedaysForecast({longitude, latitude}, (data) => {
                this.setState({
                    data: data,
                    isLoading: false,
                });
            }, () => {
                this.setState({
                    isLoading: false,
                    isHaveError: true,
                })
            });
        }
    };

    _handleBriefForecastItemClick(i) {
        return () => {
            this.setState({
                activeItemIndex: i,
            })
        };
    };

    _renderCity() {
        const {data} = this.state;
        return (
            <div id="fw-city-name" className="text-center">
                {data.city.name}
            </div>
        );
    };

    _renderBriefForecast() {
        const {activeItemIndex, data} = this.state;
        const {list} = data;
        return (
            <React.Fragment>
                {
                    list.map((item, i) => {
                        const mid = Math.floor((item.length - 1) / 2);
                        return (
                            <div
                                key={item[mid].dt}
                                className={
                                    i === activeItemIndex
                                    ? "fw-brief-forecast-item active"
                                    : "fw-brief-forecast-item"
                                }
                                onClick={this._handleBriefForecastItemClick(i)}
                            >
                                <div className="fw-brief-week-day">
                                    {TimeUtils.getDayOfWeek(MS_PER_SECOND * item[mid].dt)}
                                </div>
                                <div className="fw-brief-weather-icon">
                                    <i className={`wi ${WEATHER_ICONS[item[mid].weather[0].icon]}`} />
                                </div>
                            </div>
                        );
                    })
                }
            </React.Fragment>
        );
    };

    _renderDetailForecast() {
        const {data, activeItemIndex} = this.state;
        const {list} = data;
        const activeList = list[activeItemIndex];
        return (
            <React.Fragment>
                {
                    activeList.map((item) => (
                        <div
                            key={item.dt}
                            className="fw-detail-forecast-item animated fadeIn"
                        >
                            <div className="fw-detail-hour">
                                {`${
                                    TimeUtils.getHours(MS_PER_SECOND * item.dt)
                                }:${
                                    TimeUtils.getMinutes(MS_PER_SECOND * item.dt)
                                }`}
                            </div>
                            <div className="fw-detail-description">
                                {item.weather[0].description}
                            </div>
                            <div className="fw-detail-temperature">
                                {Math.round(item.main.temp)}
                                <span className="fw-temperature-unit">&#x2103;</span>
                            </div>
                            <div className="fw-detail-weather-icon">
                                <i className={`wi ${WEATHER_ICONS[item.weather[0].icon]}`} />
                            </div>
                        </div>
                    ))
                }
            </React.Fragment>
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

    _renderBody() {
        const {isLoading, data} = this.state;
        if (isLoading) {
            return (<Spinner containerHeight={SLIDE_HEIGHT} />);
        } else if (data) {
            return (
                <div
                    id="fw-body"
                    style={{height: this.props.height}}
                    className="animated fadeIn"
                >
                    <div id="fw-panel1" className="fw-panel">
                        {this._renderCity()}
                    </div>
                    <div id="fw-panel2" className="fw-panel">
                        {this._renderBriefForecast()}
                    </div>
                    <div id="fw-panel3" className="fw-panel scrollable-list">
                        {this._renderDetailForecast()}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    };

    render() {
        return (
            <React.Fragment>
                {this._renderBody()}
                {this._renderErrorAlert()}
            </React.Fragment>
        );
    };

};

FivedaysWeather.propTypes = {
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

export default FivedaysWeather;