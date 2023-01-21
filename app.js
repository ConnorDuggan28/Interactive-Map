// start of map
const myMap = {
    
}

//build leaflet here
buildMap() {
    this.map = L.map('map', {
        center: this.coordinates,
        zoom: 11,
    });
}
 //link to openstreetmap
 L.tileLayer('https://.tile.openstreetmap.org///.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    minZoom: '15',
}).addTo(this.map)
