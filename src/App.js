import React, {Component} from 'react';
import './App.css';
import './assets/index';
import WeatherPage from "./conainers/weather-page/WeatherPage";

class App extends Component {

    render() {
        return (
            <WeatherPage />
        );
    };
}

export default App;
