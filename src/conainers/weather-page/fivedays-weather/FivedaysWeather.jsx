import React from 'react';
import * as PropTypes from 'prop-types';
import WeatherService from '../../../services/WeatherService';
import AlertModal from "../../../commons/alert-modal/AlertModal";
import Spinner from "../../../commons/spinner/Spinner";
import {SLIDE_HEIGHT} from '../../weather-page/WeatherPageStyle';
import {WEATHER_ICONS} from '../../../constants/WeatherIcon';
import TimeUtils from '../../../utils/TimeUtils';
import './FivedaysWeather.css';

const data = {
    "cod": "200",
    "message": 0.0063,
    "cnt": 40,
    "list": [
        [
            {
                "dt": 1541786400,
                "main": {
                    "temp": 20.9,
                    "temp_min": 20.9,
                    "temp_max": 20.9,
                    "pressure": 1020.14,
                    "sea_level": 1028.56,
                    "grnd_level": 1020.14,
                    "humidity": 97,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 1.27,
                    "deg": 269.001
                },
                "rain": {
                    "3h": 0.07
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-09 18:00:00"
            },
            {
                "dt": 1541797200,
                "main": {
                    "temp": 20.37,
                    "temp_min": 20.37,
                    "temp_max": 20.37,
                    "pressure": 1019.76,
                    "sea_level": 1028.11,
                    "grnd_level": 1019.76,
                    "humidity": 99,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.17,
                    "deg": 328.502
                },
                "rain": {
                    "3h": 0.16
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-09 21:00:00"
            },
            {
                "dt": 1541808000,
                "main": {
                    "temp": 20.76,
                    "temp_min": 20.75,
                    "temp_max": 20.76,
                    "pressure": 1021.18,
                    "sea_level": 1029.57,
                    "grnd_level": 1021.18,
                    "humidity": 99,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 1.68,
                    "deg": 344.507
                },
                "rain": {
                    "3h": 0.815
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-10 00:00:00"
            },
            {
                "dt": 1541818800,
                "main": {
                    "temp": 22.13,
                    "temp_min": 22.13,
                    "temp_max": 22.13,
                    "pressure": 1022.3,
                    "sea_level": 1030.63,
                    "grnd_level": 1022.3,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.83,
                    "deg": 342.5
                },
                "rain": {
                    "3h": 1.165
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-10 03:00:00"
            },
            {
                "dt": 1541829600,
                "main": {
                    "temp": 22.97,
                    "temp_min": 22.97,
                    "temp_max": 22.97,
                    "pressure": 1020,
                    "sea_level": 1028.27,
                    "grnd_level": 1020,
                    "humidity": 98,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.73,
                    "deg": 359.016
                },
                "rain": {
                    "3h": 0.32
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-10 06:00:00"
            },
            {
                "dt": 1541840400,
                "main": {
                    "temp": 23.67,
                    "temp_min": 23.67,
                    "temp_max": 23.67,
                    "pressure": 1018.72,
                    "sea_level": 1026.96,
                    "grnd_level": 1018.72,
                    "humidity": 95,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 0.54,
                    "deg": 47.5007
                },
                "rain": {
                    "3h": 0.165
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-10 09:00:00"
            },
            {
                "dt": 1541851200,
                "main": {
                    "temp": 22.29,
                    "temp_min": 22.29,
                    "temp_max": 22.29,
                    "pressure": 1019.87,
                    "sea_level": 1028.21,
                    "grnd_level": 1019.87,
                    "humidity": 98,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 48
                },
                "wind": {
                    "speed": 1.07,
                    "deg": 235.501
                },
                "rain": {
                    "3h": 0.27
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-10 12:00:00"
            },
            {
                "dt": 1541862000,
                "main": {
                    "temp": 20.98,
                    "temp_min": 20.98,
                    "temp_max": 20.98,
                    "pressure": 1021.02,
                    "sea_level": 1029.35,
                    "grnd_level": 1021.02,
                    "humidity": 98,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 0.3,
                    "deg": 241.501
                },
                "rain": {
                    "3h": 1.23
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-10 15:00:00"
            }
        ],
        [
            {
                "dt": 1541872800,
                "main": {
                    "temp": 21.19,
                    "temp_min": 21.19,
                    "temp_max": 21.19,
                    "pressure": 1020.15,
                    "sea_level": 1028.42,
                    "grnd_level": 1020.15,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 0.91,
                    "deg": 299.5
                },
                "rain": {
                    "3h": 1.59
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-10 18:00:00"
            },
            {
                "dt": 1541883600,
                "main": {
                    "temp": 21.03,
                    "temp_min": 21.03,
                    "temp_max": 21.03,
                    "pressure": 1018.86,
                    "sea_level": 1027.26,
                    "grnd_level": 1018.86,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 1.35,
                    "deg": 286.505
                },
                "rain": {
                    "3h": 0.7
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-10 21:00:00"
            },
            {
                "dt": 1541894400,
                "main": {
                    "temp": 21.18,
                    "temp_min": 21.18,
                    "temp_max": 21.18,
                    "pressure": 1019.8,
                    "sea_level": 1028.14,
                    "grnd_level": 1019.8,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 1.72,
                    "deg": 299.005
                },
                "rain": {
                    "3h": 0.5
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-11 00:00:00"
            },
            {
                "dt": 1541905200,
                "main": {
                    "temp": 24.14,
                    "temp_min": 24.14,
                    "temp_max": 24.14,
                    "pressure": 1020.53,
                    "sea_level": 1028.84,
                    "grnd_level": 1020.53,
                    "humidity": 97,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 1.86,
                    "deg": 325.007
                },
                "rain": {
                    "3h": 0.02
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-11 03:00:00"
            },
            {
                "dt": 1541916000,
                "main": {
                    "temp": 26.75,
                    "temp_min": 26.75,
                    "temp_max": 26.75,
                    "pressure": 1017.81,
                    "sea_level": 1026.1,
                    "grnd_level": 1017.81,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 36
                },
                "wind": {
                    "speed": 1.76,
                    "deg": 97.0006
                },
                "rain": {
                    "3h": 0.02
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-11 06:00:00"
            },
            {
                "dt": 1541926800,
                "main": {
                    "temp": 27.16,
                    "temp_min": 27.16,
                    "temp_max": 27.16,
                    "pressure": 1016.31,
                    "sea_level": 1024.67,
                    "grnd_level": 1016.31,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 1.96,
                    "deg": 138.501
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-11 09:00:00"
            },
            {
                "dt": 1541937600,
                "main": {
                    "temp": 24.59,
                    "temp_min": 24.59,
                    "temp_max": 24.59,
                    "pressure": 1017.72,
                    "sea_level": 1026.09,
                    "grnd_level": 1017.72,
                    "humidity": 91,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.87,
                    "deg": 142.503
                },
                "rain": {
                    "3h": 0.13
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-11 12:00:00"
            },
            {
                "dt": 1541948400,
                "main": {
                    "temp": 23.57,
                    "temp_min": 23.57,
                    "temp_max": 23.57,
                    "pressure": 1018.53,
                    "sea_level": 1026.93,
                    "grnd_level": 1018.53,
                    "humidity": 97,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.15,
                    "deg": 144.509
                },
                "rain": {
                    "3h": 0.36
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-11 15:00:00"
            }
        ],
        [
            {
                "dt": 1541959200,
                "main": {
                    "temp": 22.68,
                    "temp_min": 22.68,
                    "temp_max": 22.68,
                    "pressure": 1017.51,
                    "sea_level": 1025.93,
                    "grnd_level": 1017.51,
                    "humidity": 97,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 1.83,
                    "deg": 135.504
                },
                "rain": {
                    "3h": 0.010000000000001
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-11 18:00:00"
            },
            {
                "dt": 1541970000,
                "main": {
                    "temp": 22.05,
                    "temp_min": 22.05,
                    "temp_max": 22.05,
                    "pressure": 1016.81,
                    "sea_level": 1025.16,
                    "grnd_level": 1016.81,
                    "humidity": 97,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.41,
                    "deg": 116.5
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-11 21:00:00"
            },
            {
                "dt": 1541980800,
                "main": {
                    "temp": 22.66,
                    "temp_min": 22.66,
                    "temp_max": 22.66,
                    "pressure": 1018.02,
                    "sea_level": 1026.34,
                    "grnd_level": 1018.02,
                    "humidity": 98,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.72,
                    "deg": 124.005
                },
                "rain": {
                    "3h": 0.08
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-12 00:00:00"
            },
            {
                "dt": 1541991600,
                "main": {
                    "temp": 24.52,
                    "temp_min": 24.52,
                    "temp_max": 24.52,
                    "pressure": 1018.88,
                    "sea_level": 1027.22,
                    "grnd_level": 1018.88,
                    "humidity": 97,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.72,
                    "deg": 120
                },
                "rain": {
                    "3h": 0.13
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-12 03:00:00"
            },
            {
                "dt": 1542002400,
                "main": {
                    "temp": 24.64,
                    "temp_min": 24.64,
                    "temp_max": 24.64,
                    "pressure": 1016.93,
                    "sea_level": 1025.17,
                    "grnd_level": 1016.93,
                    "humidity": 99,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 2.19,
                    "deg": 63.5046
                },
                "rain": {
                    "3h": 1.79
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-12 06:00:00"
            },
            {
                "dt": 1542013200,
                "main": {
                    "temp": 22.33,
                    "temp_min": 22.33,
                    "temp_max": 22.33,
                    "pressure": 1016.4,
                    "sea_level": 1024.6,
                    "grnd_level": 1016.4,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 2.51,
                    "deg": 40.0014
                },
                "rain": {
                    "3h": 4.8
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-12 09:00:00"
            },
            {
                "dt": 1542024000,
                "main": {
                    "temp": 21.64,
                    "temp_min": 21.64,
                    "temp_max": 21.64,
                    "pressure": 1017.49,
                    "sea_level": 1025.71,
                    "grnd_level": 1017.49,
                    "humidity": 99,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.63,
                    "deg": 37.0037
                },
                "rain": {
                    "3h": 0.75
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-12 12:00:00"
            },
            {
                "dt": 1542034800,
                "main": {
                    "temp": 20.75,
                    "temp_min": 20.75,
                    "temp_max": 20.75,
                    "pressure": 1018.78,
                    "sea_level": 1027.03,
                    "grnd_level": 1018.78,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.72,
                    "deg": 33.0031
                },
                "rain": {
                    "3h": 0.89
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-12 15:00:00"
            }
        ],
        [
            {
                "dt": 1542045600,
                "main": {
                    "temp": 19.98,
                    "temp_min": 19.98,
                    "temp_max": 19.98,
                    "pressure": 1018.08,
                    "sea_level": 1026.38,
                    "grnd_level": 1018.08,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.96,
                    "deg": 28.002
                },
                "rain": {
                    "3h": 1.28
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-12 18:00:00"
            },
            {
                "dt": 1542056400,
                "main": {
                    "temp": 19.87,
                    "temp_min": 19.87,
                    "temp_max": 19.87,
                    "pressure": 1017.33,
                    "sea_level": 1025.61,
                    "grnd_level": 1017.33,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.61,
                    "deg": 24.5034
                },
                "rain": {
                    "3h": 5.28
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-12 21:00:00"
            },
            {
                "dt": 1542067200,
                "main": {
                    "temp": 20.01,
                    "temp_min": 20.01,
                    "temp_max": 20.01,
                    "pressure": 1018.18,
                    "sea_level": 1026.43,
                    "grnd_level": 1018.18,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 2.16,
                    "deg": 46.5033
                },
                "rain": {
                    "3h": 2.37
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-13 00:00:00"
            },
            {
                "dt": 1542078000,
                "main": {
                    "temp": 21.07,
                    "temp_min": 21.07,
                    "temp_max": 21.07,
                    "pressure": 1019.02,
                    "sea_level": 1027.27,
                    "grnd_level": 1019.02,
                    "humidity": 99,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 2.39,
                    "deg": 48.0016
                },
                "rain": {
                    "3h": 0.35
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-13 03:00:00"
            },
            {
                "dt": 1542088800,
                "main": {
                    "temp": 22.78,
                    "temp_min": 22.78,
                    "temp_max": 22.78,
                    "pressure": 1016.55,
                    "sea_level": 1024.83,
                    "grnd_level": 1016.55,
                    "humidity": 96,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 1.88,
                    "deg": 56.0045
                },
                "rain": {
                    "3h": 0.1
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-13 06:00:00"
            },
            {
                "dt": 1542099600,
                "main": {
                    "temp": 22.73,
                    "temp_min": 22.73,
                    "temp_max": 22.73,
                    "pressure": 1015.24,
                    "sea_level": 1023.4,
                    "grnd_level": 1015.24,
                    "humidity": 98,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.81,
                    "deg": 91.5019
                },
                "rain": {
                    "3h": 0.25
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-13 09:00:00"
            },
            {
                "dt": 1542110400,
                "main": {
                    "temp": 21.88,
                    "temp_min": 21.88,
                    "temp_max": 21.88,
                    "pressure": 1016.34,
                    "sea_level": 1024.71,
                    "grnd_level": 1016.34,
                    "humidity": 99,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.15,
                    "deg": 64.5001
                },
                "rain": {
                    "3h": 0.94
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-13 12:00:00"
            },
            {
                "dt": 1542121200,
                "main": {
                    "temp": 21.82,
                    "temp_min": 21.82,
                    "temp_max": 21.82,
                    "pressure": 1017.57,
                    "sea_level": 1025.88,
                    "grnd_level": 1017.57,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.16,
                    "deg": 72.5009
                },
                "rain": {
                    "3h": 2.08
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-13 15:00:00"
            }
        ],
        [
            {
                "dt": 1542132000,
                "main": {
                    "temp": 21.83,
                    "temp_min": 21.83,
                    "temp_max": 21.83,
                    "pressure": 1016.75,
                    "sea_level": 1025.08,
                    "grnd_level": 1016.75,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.35,
                    "deg": 93.0023
                },
                "rain": {
                    "3h": 1.84
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-13 18:00:00"
            },
            {
                "dt": 1542142800,
                "main": {
                    "temp": 22.06,
                    "temp_min": 22.06,
                    "temp_max": 22.06,
                    "pressure": 1015.7,
                    "sea_level": 1024.01,
                    "grnd_level": 1015.7,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 1.41,
                    "deg": 123.501
                },
                "rain": {
                    "3h": 0.45
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-13 21:00:00"
            },
            {
                "dt": 1542153600,
                "main": {
                    "temp": 22.39,
                    "temp_min": 22.39,
                    "temp_max": 22.39,
                    "pressure": 1016.79,
                    "sea_level": 1025.13,
                    "grnd_level": 1016.79,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 0.67,
                    "deg": 191.5
                },
                "rain": {
                    "3h": 0.34
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-14 00:00:00"
            },
            {
                "dt": 1542164400,
                "main": {
                    "temp": 23.94,
                    "temp_min": 23.94,
                    "temp_max": 23.94,
                    "pressure": 1017.86,
                    "sea_level": 1026.17,
                    "grnd_level": 1017.86,
                    "humidity": 100,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 0.42,
                    "deg": 330.001
                },
                "rain": {
                    "3h": 0.69
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-14 03:00:00"
            },
            {
                "dt": 1542175200,
                "main": {
                    "temp": 26.19,
                    "temp_min": 26.19,
                    "temp_max": 26.19,
                    "pressure": 1014.94,
                    "sea_level": 1023.25,
                    "grnd_level": 1014.94,
                    "humidity": 93,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 0.71,
                    "deg": 73.5022
                },
                "rain": {
                    "3h": 0.12
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-14 06:00:00"
            },
            {
                "dt": 1542186000,
                "main": {
                    "temp": 26.11,
                    "temp_min": 26.11,
                    "temp_max": 26.11,
                    "pressure": 1013.46,
                    "sea_level": 1021.74,
                    "grnd_level": 1013.46,
                    "humidity": 93,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 2.2,
                    "deg": 151.5
                },
                "rain": {
                    "3h": 1.36
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2018-11-14 09:00:00"
            },
            {
                "dt": 1542196800,
                "main": {
                    "temp": 24.56,
                    "temp_min": 24.56,
                    "temp_max": 24.56,
                    "pressure": 1014.75,
                    "sea_level": 1023.13,
                    "grnd_level": 1014.75,
                    "humidity": 93,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 48
                },
                "wind": {
                    "speed": 3.42,
                    "deg": 158.011
                },
                "rain": {
                    "3h": 0.13
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-14 12:00:00"
            },
            {
                "dt": 1542207600,
                "main": {
                    "temp": 23.26,
                    "temp_min": 23.26,
                    "temp_max": 23.26,
                    "pressure": 1015.97,
                    "sea_level": 1024.39,
                    "grnd_level": 1015.97,
                    "humidity": 95,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.77,
                    "deg": 162.502
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2018-11-14 15:00:00"
            }
        ]
    ],
    "city": {
        "id": 1581130,
        "name": "Ha Noi",
        "coord": {
            "lat": 21.0245,
            "lon": 105.8412
        },
        "country": "VN",
        "population": 1431270
    }
}

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
        const MS_PER_SECOND = 1e3;
        return (
            <React.Fragment>
                {
                    list.map((item, i) => {
                        const mid = Math.floor(item.length / 2);
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