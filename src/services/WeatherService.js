module.exports = (function () {
    const WeatherApi = require('../apis/WeatherApi');
    const fetchedCurrent = {};
    const fetchedFivedays  = {};
    const MS_PER_MINUTE = 60000;

    function _isCached(coords, storage) {
        const key = JSON.stringify(coords);
        const now = Date.now();
        if (
            storage[key]
            && (now - storage[key].timestamp) / MS_PER_MINUTE <= 10
        ) {
            return true;
        } else {
            return false;
        }
    };

    function _getCachedData(coords, storage) {
        const key = JSON.stringify(coords);
        return storage[key] ? storage[key].data : null;
    };

    function _cache(coords, data, storage) {
        const key = JSON.stringify(coords);
        const timestamp = Date.now();
        const cacheValue = {
            data: data,
            timestamp: timestamp
        };
        storage[key] = cacheValue;
    };

    function _getCurrentWeather(coords, onDone) {
        if (_isCached(coords, fetchedCurrent)) {
            onDone(_getCachedData(coords, fetchedCurrent));
        } else {
            WeatherApi.getCurrentWeather(coords)
                .then((res) => {
                    if (res.data) {
                        _cache(coords, res.data, fetchedCurrent);
                        onDone(res.data);
                    } else {
                        onDone(null);
                    }
                }, (err) => {
                    console.error(err);
                    onDone(null);
                });
        }
    };

    function _getFivedaysForecast(coords, onDone) {
        if (_isCached(coords, fetchedFivedays)) {
            onDone(_getCachedData(coords, fetchedFivedays));
        } else {
            WeatherApi.getFivedaysForecast(coords)
                .then((res) => {
                    if (res.data) {
                        _cache(coords, res.data, fetchedFivedays);
                        onDone(res.data);
                    } else {
                        onDone(null);
                    }
                }, (err) => {
                    console.error(err);
                    onDone(null);
                });
        }
    };

    return {
        getCurrentWeather: function(coords, onDone) {
            _getCurrentWeather(coords, (data) => {
                onDone(data);
            });
        },
        getFivedaysForecast: function(coords, onDone) {
            _getFivedaysForecast(coords, (data) => {
                onDone(data);
            });
        },
    };
})();
