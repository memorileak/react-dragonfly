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
        getDayOfWeek: function(timestamp) {
            return DAYS[(new Date(timestamp)).getDay()];
        },
    };
})();