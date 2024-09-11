function requestLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                // Success callback
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                alert("Location accessed! Latitude: " + latitude + ", Longitude: " + longitude);
            },
            function (error) {
                // Error callback
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        alert("The request to get user location timed out.");
                        break;
                    case error.UNKNOWN_ERROR:
                        alert("An unknown error occurred.");
                        break;
                }
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}