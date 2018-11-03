import React from 'react';
import spinnerSource from '../../assets/images/spinner.png';
import './Spinner.css';

class Spinner extends React.Component {

    render() {
        return (
            <div className="spinner-container">
                <img 
                    src={spinnerSource} 
                    alt="spinner"
                    className="spinner"
                />
            </div>
        );
    };

};

export default Spinner;