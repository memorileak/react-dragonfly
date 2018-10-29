module.exports = (function() {
    const PlacesServiceStatus = window.google ? window.google.maps.places.PlacesServiceStatus : {};
    const geocoder = window.google ? new window.google.maps.Geocoder() : {};
    const autocompleteService = window.google ? new window.google.maps.places.AutocompleteService() : {};
    return {
        getPlacePredictions: function(queryString, onDone) {
            const query = {
                input: queryString
            };
            autocompleteService.getPlacePredictions(query, function(predictions, status) {
                if (status !== PlacesServiceStatus.OK) {
                    console.error(status);
                    onDone([]);
                } else {
                    onDone(predictions);
                }
            });
        },
        getCoordsThroughGeocoding: function(placeId, onDone) {
            const query = {
                placeId: placeId
            };
            geocoder.geocode(query, function(results, status) {
                if (status === 'OK' && Array.isArray(results) && results.length > 0) {
                    const location = results[0].geometry.location;
                    onDone({
                        latitude: location.lat(),
                        longitude: location.lng()
                    })
                } else {
                    onDone({
                        latitude: null,
                        longitude: null,
                    });
                }
            });
        },
    };
})();