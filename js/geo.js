/**
 * File Name: geo.js
 *
 * Revision History:
 *       Sabbir Ahmed, 2021-03-04 : Created
 */

var lat;
var lng;
var alt;


function showMap(){
    // Initialize the platform object
    var platform = new H.service.Platform({
        'apikey':'g3OImBdDbf2SqsXMhPTkM3I4nO9XDOgzlAN7CXa1kzo'
    });

    //obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();

    //instantiate a map object
    var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.vector.normal.map,
        {
            zoom:15,
            center: {
                lng: lng,
                lat: lat
            }
        }
    );

    var icon = new H.map.Icon('img/dog.png');
    var marker = new H.map.Marker(
        {
            lat: lat,
            lng: lng
        },
        {
            icon: icon
        }
    );

    //add the marker to the map and center the map at the location of the marker;
    map.addObject(marker);
}


function getPosition(){
    console.info("Starting getPosition() ");

    try{
        if (navigator.geolocation !== null) {
            var options = {
                enableHighAccuracy: true,
                timeout: 60000,
                maximumAge: 0
            };
            function onSuccess(position){
                var coordinates = position.coords;
                lat = coordinates.latitude;
                lng = coordinates.longitude;
                alt = coordinates.altitude;

                console.info("Latitude: " + lat);
                console.info("Longitude: " + lng);
                console.info("Altitude: " + alt);

                showMap();

            }
            function  onFail(error){
                var msg = "";
                try{
                    if (error) {
                        switch (error.code) {
                            case error.TIMEOUT:
                                msg = "TIMEOUT: " + error.message;
                                break;
                            case error.PERMISSION_DENIED:
                                msg = "PERMISSION_DENIED: " + error.message;
                                break;
                            case error.POSITION_UNAVAILABLE:
                                msg = "POSITION_UNAVAILABLE: " + error.message;
                                break;
                            default:
                                msg = "UNHANDLED MESSAGE CODE("+ error.code + "): " + error.message;
                                break;
                        }
                        console.error(msg);
                    }
                }
                catch(e){
                    console.error("Exception (geolocation Error): " + e);
                }
            }
            navigator.geolocation.getCurrentPosition(onSuccess, onFail, options);
        }
        else{
            console.error("HTML5 geolocaiton is not supported");
        }
    }catch(e){
        console.error("Exception in getPosition(): " + e);
    }
}
