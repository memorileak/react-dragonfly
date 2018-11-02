import React, {Component} from 'react';
import {Offline, Online} from 'react-detect-offline';
import WeatherPage from "./conainers/weather-page/WeatherPage";
import ErrorDisplay from "./commons/error-display/ErrorDisplay";
import {INNER_HEIGHT} from './constants/InnerHeight';
import './App.css';
import './assets/index';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Offline polling={{enabled: false}}>
                    <ErrorDisplay
                        height={INNER_HEIGHT}
                        faIcon="fa-wifi-slash"
                        messages={[
                            "You are offline right now!",
                            "Please allow network connection to run this app."
                        ]}
                    />
                </Offline>
                <Online polling={{enabled: false}}>
                    <WeatherPage />
                </Online>
            </React.Fragment>
        );
    };
}

export default App;
