module.exports = (function() {
    const axios = require('axios');
    const BASE_URL = 'https://api.openweathermap.org/data/2.5';
    const API_KEY = '5f659236d73e58b413a859c6829b91d4';
    return {
        getCurrentWeather: function(coords) {
            const url = `${BASE_URL}/weather?units=metric&lat=${coords.latitude}&lon=${coords.longitude}&APPID=${API_KEY}`;
            return axios.get(url);
        },
        getFivedaysForecast: function(coords) {
            const url = `${BASE_URL}/forecast?units=metric&lat=${coords.latitude}&lon=${coords.longitude}&APPID=${API_KEY}`;
            return axios.get(url);
        },
    };
})();