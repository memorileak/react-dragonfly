import React from 'react';
import * as PropTypes from 'prop-types';
import spinnerSource from '../../assets/images/spinner.png';
import './Spinner.css';

class Spinner extends React.Component {

    render() {
        const {containerHeight} = this.props;
        return (
            <div
                style={{
                    height: containerHeight
                }}
                className="spinner-container"
            >
                <img 
                    src={spinnerSource} 
                    alt="spinner"
                    className="spinner"
                />
            </div>
        );
    };

};

Spinner.propTypes = {
    containerHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
};

export default Spinner;