import React from 'react';
import * as PropTypes from 'prop-types';
import './ErrorDisplay.css';

class ErrorDisplay extends React.Component {

    render() {
        const {height, faIcon, messages} = this.props;
        return (
            <div
                id="error-display"
                style={{
                    height: height
                }}
            >
                <div className="container">
                    {faIcon ? <i className={`fas ${faIcon}`} /> : null}
                    {
                        messages.map((message, i) => (
                            <div key={i} className="error-display-message ">
                                {message}
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    };

};

ErrorDisplay.propTypes = {
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    faIcon: PropTypes.string,
    messages: PropTypes.array.isRequired,
};

export default ErrorDisplay;