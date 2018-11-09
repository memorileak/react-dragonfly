module.exports = (function() {
    const PlacesServiceStatus = window.google ? window.google.maps.places.PlacesServiceStatus : {};
    const geocoder = window.google ? new window.google.maps.Geocoder() : {};
    const autocompleteService = window.google ? new window.google.maps.places.AutocompleteService() : {};
    return {
        getPlacePredictions: function(queryString, onSuccess, onFail) {
            const query = {
                input: queryString
            };
            autocompleteService.getPlacePredictions(query, function(predictions, status) {
                if (status !== PlacesServiceStatus.OK) {
                    console.error(status);
                    onFail(status);
                } else {
                    onSuccess(predictions);
                }
            });
        },
        getCoordsThroughGeocoding: function(placeId, onSuccess, onFail) {
            const query = {
                placeId: placeId
            };
            geocoder.geocode(query, function(results, status) {
                if (status === 'OK' && Array.isArray(results) && results.length > 0) {
                    const location = results[0].geometry.location;
                    onSuccess({
                        latitude: location.lat(),
                        longitude: location.lng()
                    })
                } else {
                    console.error(status);
                    onFail(status);
                }
            });
        },
        getCoordsOfCurrentPosition: function(onSuccess, onFail) {
            navigator.geolocation.getCurrentPosition(
                function(data) {
                    onSuccess({
                        longitude: data.coords.longitude,
                        latitude: data.coords.latitude
                    });
                },
                function(err) {
                    console.error(err);
                    onFail(err);
                }
            );
        },
    };
})();