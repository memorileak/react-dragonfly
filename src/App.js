import React, {Component} from 'react';
import './App.css';
import './assets/index';
import {Offline, Online} from 'react-detect-offline';
import WeatherPage from "./conainers/weather-page/WeatherPage";

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Offline
                    polling={{
                        enabled: false
                    }}
                >
                    <div id="app-offline">
                        <i className="fas fa-exclamation-circle" />
                        <div className="app-offline-status">
                            &nbsp;You are offline right now!
                        </div>
                        <div className="app-offline-status">
                            Please check your network connection.
                        </div>
                    </div>
                </Offline>
                <Online
                    polling={{
                        enabled: false
                    }}
                >
                    <WeatherPage />
                </Online>
            </React.Fragment>
        );
    };
}

export default App;
