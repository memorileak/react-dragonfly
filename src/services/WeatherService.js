module.exports = (function () {
    const WeatherApi = require('../apis/WeatherApi');
    const fetchedCurrent = {};
    const fetchedFivedays  = {};
    const MS_PER_MINUTE = 6e4;
    const MS_PER_SECOND = 1e3;
    const DAYS_PER_WEEK = 7;

    function _produceKey(coords) {
        return JSON.stringify(coords);
    };

    function _isCached(coords, storage) {
        const key = _produceKey(coords);
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
        const key = _produceKey(coords);
        return storage[key] ? storage[key].data : null;
    };

    function _cache(coords, data, storage) {
        const key = _produceKey(coords);
        const timestamp = Date.now();
        const cacheValue = {
            data: data,
            timestamp: timestamp,
        };
        storage[key] = cacheValue;
    };

    function _partitionForecastList(list) {
        if (Array.isArray(list) && list.length > 0) {
            const newList = [];
            const offset = DAYS_PER_WEEK - (new Date(list[0].dt * MS_PER_SECOND)).getDay();
            list.forEach((item) => {
                const i = (offset + (new Date(item.dt * MS_PER_SECOND)).getDay()) % DAYS_PER_WEEK;
                if (newList[i]) {
                    newList[i].push(item);
                } else {
                    newList[i] = [item];
                }
            });
            return newList;
        } else {
            return {};
        }
    };

    function _getCurrentWeather(coords, onSuccess, onFail) {
        if (_isCached(coords, fetchedCurrent)) {
            onSuccess(_getCachedData(coords, fetchedCurrent));
        } else {
            WeatherApi.getCurrentWeather(coords)
                .then((res) => {
                    if (res.data) {
                        _cache(coords, res.data, fetchedCurrent);
                        onSuccess(res.data);
                    } else {
                        onSuccess(null);
                    }
                }, (err) => {
                    console.error(err);
                    onFail(err);
                });
        }
    };

    function _getFivedaysForecast(coords, onSuccess, onFail) {
        if (_isCached(coords, fetchedFivedays)) {
            onSuccess(_getCachedData(coords, fetchedFivedays));
        } else {
            WeatherApi.getFivedaysForecast(coords)
                .then((res) => {
                    if (res.data) {
                        const {list} = res.data;
                        const newList = _partitionForecastList(list);
                        res.data.list = newList;
                        _cache(coords, res.data, fetchedFivedays);
                        onSuccess(res.data);
                    } else {
                        onSuccess(null);
                    }
                }, (err) => {
                    console.error(err);
                    onFail(err);
                });
        }
    };

    return {
        getCurrentWeather: _getCurrentWeather,
        getFivedaysForecast: _getFivedaysForecast,
    };
})();
