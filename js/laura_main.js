// Carte mon expérience

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
}

console.log("connectée si señora");

// Effets textos


AOS.init({
    duration: 1200
});