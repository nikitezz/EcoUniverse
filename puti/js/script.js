// создание карты
var mymap = L.map('map').setView([52.4447, 31.0119], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'ЭкоВселенная',
    maxZoom: 18
}).addTo(mymap);
mymap.attributionControl.setPrefix('');



const museums = document.getElementById('museums');
const reserve = document.getElementById('reserve');
const myGeolocation = document.getElementById('MyGeolocation');



var markersMuseums = [];
var markersReserve = [];



//Музеи (ГОТОВО)
const blockModalMuseums1 = document.getElementById('block-modal1-museums');
const closeMuseums1 = document.getElementById('close1-museums').addEventListener('click',function(){
  blockModalMuseums1.classList.remove('active1_culture');
})


// Заповедники (ГОТОВО)
const blockModalReserve1 = document.getElementById('block-modal1-reserve');
const closeReserve1 = document.getElementById('close1-reserve').addEventListener('click',function(){
  blockModalReserve1.classList.remove('active1_culture');
})
const blockModalReserve2 = document.getElementById('block-modal2-reserve');
const closeReserve2 = document.getElementById('close2-reserve').addEventListener('click',function(){
  blockModalReserve2.classList.remove('active1_culture');
})
const blockModalReserve3 = document.getElementById('block-modal3-reserve');
const closeReserve3 = document.getElementById('close3-reserve').addEventListener('click',function(){
  blockModalReserve3.classList.remove('active1_culture');
})


                                        
//Функция для создание и скрытие маркеров (Музеи)
function createMarkersMuseums(){
  var fiolIcon = L.icon({
    iconUrl: './img/marker/map-marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [35, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
  var marker2 = L.marker([52.42846,31.018764], {icon:fiolIcon}).addTo(mymap);
  marker2.on('click', function() {
    blockModalMuseums1.classList.add('active1_culture')
  });
  


  markersMuseums.push(marker2,
    marker3,
    marker4,
    marker5,
    marker6,
    marker7,
    marker8,
    marker9,
    marker10,
    marker11,
    marker12,
    marker13,
    marker14,
    marker15,
    marker16,
    marker17,
    marker18,
    marker19,
    marker20);
}
museums.addEventListener('click',function(){
  createMarkersMuseums();
})   

//Функция для скрытия маркеров
function hideMarkersMuseums() { 
  for (var i = 0; i < markersMuseums.length; i++) {
      mymap.removeLayer(markersMuseums[i]);
  }
  markersMuseums = [];
} 
cancelFilter.addEventListener('click',function(){
  hideMarkersMuseums();
})

//Функция для создание и скрытие маркеров (Заповедники)
function createMarkersReserve(){
  var fiolIcon = L.icon({
    iconUrl: './img/marker/pink.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [35, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
  var marker2 = L.marker([52.13931361933129, 26.888946737837475], {icon:fiolIcon}).addTo(mymap);
  marker2.on('click', function() {
    blockModalReserve1.classList.add('active1_culture');
  });
  var marker3 = L.marker([52.01708146469255, 30.800749591469188], {icon:fiolIcon}).addTo(mymap);
  marker3.on('click', function(){
    blockModalReserve2.classList.add('active1_culture');
  });
  var marker4 = L.marker([51.614318194764316, 29.9390127656303], {icon:fiolIcon}).addTo(mymap);
  marker4.on('click', function(){
    blockModalReserve3.classList.add('active1_culture');
  });
  markersReserve.push(marker2,marker3,marker4);
}
reserve.addEventListener('click',function(){
  createMarkersReserve();
}) 
//Функция для скрытия маркеров
function hideMarkersReserve() {
  for (var i = 0; i < markersReserve.length; i++) {
      mymap.removeLayer(markersReserve[i]);
  }
  markersReserve = [];
} 
cancelFilter.addEventListener('click',function(){
  hideMarkersReserve();
})


//Функции модальных окон
const btnFiltr = document.getElementById('filtr');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');


btnFiltr.addEventListener('click', function(){
  modal.classList.add('active');
})
closeBtn.addEventListener('click', function(){
  modal.classList.remove('active');
})

const btnInfo =document.getElementById('info');
const blockModalInfo = document.getElementById('block-info');
const close2 = document.getElementById('close2');

btnInfo.addEventListener('click', function(){
  blockModalInfo.classList.add('active2');
})
close2.addEventListener('click',function(){
  blockModalInfo.classList.remove('active2');
})


// Route
const modalRoute = document.getElementById('block-route');
const btnRoute = document.getElementById('btn-route').addEventListener('click',function(){
  modalRoute.classList.add('active2');
})
const closeRoute = document.getElementById('close-route').addEventListener('click',function(){
  modalRoute.classList.remove('active2');
})

const sumbit = document.getElementById('submit').addEventListener('click',function(){
  var inputValueStartLat = parseFloat(document.getElementById('start-route-lat').value);
  var inputValueStartLng = parseFloat(document.getElementById('start-route-lng').value);
  var inputValueEndLat = parseFloat(document.getElementById('end-route-lat').value);
  var inputValueEndLng = parseFloat(document.getElementById('end-route-lng').value);

  var control = L.Routing.control({
    waypoints: [
      L.latLng(inputValueStartLat, inputValueStartLng), // Координаты начальной точки
      L.latLng(inputValueEndLat, inputValueEndLng) // Координаты конечной точки
    ]
  }).addTo(mymap);  
  modalRoute.classList.remove('active2');
})

//Geolocation user
function geolocationUser(){
  mymap.locate({ setView: true, maxZoom: 16 });
    var userMarker = L.marker();
    function onLocationFound(e) {
        var latitude = e.latitude;
        var longitude = e.longitude;

        document.getElementById('start-route-lat').value = latitude;
        document.getElementById('start-route-lng').value = longitude;

        userMarker.setLatLng([latitude, longitude]);
        userMarker.bindPopup("<b>Ваше местоположение!</b>");
        userMarker.addTo(mymap);
    }

    mymap.on('locationfound', onLocationFound);
}
myGeolocation.addEventListener('click', geolocationUser);

//Geolocation map
function onMapClick(e) {
  var Endlatitude = e.latlng.lat;
  var Endlongitude = e.latlng.lng;

  document.getElementById('end-route-lat').value = Endlatitude;
  document.getElementById('end-route-lng').value = Endlongitude;

  userMarker.setLatLng([Endlatitude, Endlongitude]);
  var EndMarker = L.marker();

  control.setWaypoints([]);

}
mymap.on('click', onMapClick);

const btnMyGeo = document.getElementById('mygeo').addEventListener('click',geolocationUser);
// const cancelRouteBtn = document.getElementById('CancelSubmitRoute');

// function onCancelRouteClick() {
//   alert("Отмена маршрута на данный момент не работает");
//   control.setWaypoints([]);
// }
// cancelRouteBtn.addEventListener('click',onCancelRouteClick)


var myDiv = document.getElementById('block-route');
var isDragging = false;
var startX;
var startY;

myDiv.addEventListener('mousedown', function(event) {
isDragging = true;
startX = event.clientX - myDiv.offsetLeft;
startY = event.clientY - myDiv.offsetTop;
});

document.addEventListener('mousemove', function(event) {
if (isDragging) {
  var newLeft = event.clientX - startX;
  var newTop = event.clientY - startY;
  myDiv.style.left = newLeft + 'px';
  myDiv.style.top = newTop + 'px';
}
});

document.addEventListener('mouseup', function() {
isDragging = false;
});

document.querySelectorAll('.rating').forEach(dom => {
let id = 'rating_' + dom.dataset.name;
for(var i = 0; i < 5; i++)
  dom.innerHTML += `
    <label for=${id}_${i}></label>
    <input type=radio ${dom.dataset.value-1===i&&'checked'||''} 
           name=${id} 
           id=${id}_${i} 
           onclick="ratingChanged('${dom.dataset.name}', ${i+1})">`;
});

function ratingChanged(id, value){
console.log(id, value);
}