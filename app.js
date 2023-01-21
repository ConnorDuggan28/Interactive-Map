const myMap = {

}

buildMap() ;{
    this.map = L.map('map', {
    center: this.coordinates,
    zoom: 10,
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(this.map)
const marker = L.marker(this.coordinates)
marker
.addTo(this.map)
.bindPopup('<p1><b>You are Here</b><br></p1>')
.openPopup()
}

async function getCoords(){
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
    return [pos.coords.latitude, pos.coords.longitude]
}