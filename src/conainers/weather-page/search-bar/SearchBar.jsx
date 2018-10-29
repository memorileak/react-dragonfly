import React from 'react';
import * as PropTypes from 'prop-types';
import CurrentPositionButton from "./current-position-button/CurrentPositionButton";
import './SearchBar.css';

class SearchBar extends React.Component {
    
    constructor(props) {
        super(props);
        this._handleToggleSearch = this._handleToggleSearch.bind(this);
        this._handleSearchChange = this._handleSearchChange.bind(this);
        this._handleSearchCancel = this._handleSearchCancel.bind(this);
        this._handleCurrentPositionClick = this._handleCurrentPositionClick.bind(this);
    };

    _handleToggleSearch(status) {
        return () => {
            this.placeQuery.select();
            this.props.onSearchToggle(status);
        };
    };

    _handleSearchChange() {
        const queryString = this.placeQuery.value;
        if (queryString) {
            this.props.onSearchChange(queryString);
        } else {
            this.props.onSearchChange('');
        };
    };

    _handleSearchCancel() {
        const queryString = this.placeQuery.value;
        if (queryString) {
            this.placeQuery.focus();
            this.props.onSearchClear();
        } else {
            this.props.onSearchToggle(false);
        };
    };

    _handleCurrentPositionClick() {
        this.props.onCurrentPositionClick();
    };
    
    render() {
        const {active, searchValue} = this.props;
        return (
            <div
                id="place-search-bar"
                className={active ? 'active' : ''}
            >
                <input
                    id="place-search"
                    className={active ? 'active' : ''}
                    placeholder="Search city"
                    value={searchValue}
                    onFocus={this._handleToggleSearch(true)}
                    onChange={this._handleSearchChange}
                    ref={(thisEl) => {this.placeQuery = thisEl}}
                />
                {
                    active
                    ? (
                        <span
                            id="place-search-delete"
                            className="fas fa-times animated fadeIn"
                            onClick={this._handleSearchCancel}
                        />
                    ) : (
                        <React.Fragment>
                            <span
                                id="place-search-lookup"
                                className="fas fa-search animated fadeIn"
                                onClick={() => {this.placeQuery.focus()}}
                            />
                            <CurrentPositionButton
                                onClick={this._handleCurrentPositionClick}
                            >
                                <span
                                    id="place-current-position"
                                    className="fas fa-crosshairs animated fadeIn"
                                />
                            </CurrentPositionButton>
                        </React.Fragment>
                    )
                }
            </div>
        );
    };
    
};

SearchBar.propTypes = {
    active: PropTypes.bool.isRequired,
    searchValue: PropTypes.string.isRequired,
    onSearchToggle: PropTypes.func,
    onSearchChange: PropTypes.func,
    onSearchClear: PropTypes.func,
    onSearchCancel: PropTypes.func,
    onCurrentPositionClick: PropTypes.func,
};

export default SearchBar;