import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coords: null
        };
        this._getCurrentCoords = this._getCurrentCoords.bind(this);
    };

    _getCurrentCoords() {
        navigator.geolocation.getCurrentPosition((data) => {
            this.setState({
                coords: data.coords
            });
        }, (err) => {
            console.error(err);
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <button
                        id="location-button"
                        onClick={this._getCurrentCoords}
                    >
                        Know your location
                    </button>
                    {
                        this.state.coords !== null
                        ? (
                            <div id="result-display">
                                <div>
                                    Longitude: {this.state.coords.longitude}
                                </div>
                                <div>
                                    Latitude: {this.state.coords.latitude}
                                </div>
                            </div>
                        ) : null
                    }
                </header>
            </div>
        );
    }
}

export default App;
