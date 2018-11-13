module.exports = (function () {
    const DAYS = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
    ];
    return {
        getDayOfWeek: function(timestamp = Date.now()) {
            return DAYS[(new Date(timestamp)).getDay()];
        },
        getHours: function(timestamp = Date.now()) {
            const hours = (new Date(timestamp)).getHours();
            return hours < 10 ? `0${hours}` :  `${hours}`;
        },
        getMinutes: function(timestamp = Date.now()) {
            const minutes = (new Date(timestamp)).getMinutes();
            return minutes < 10 ? `0${minutes}` :  `${minutes}`;
        },
    };
})();