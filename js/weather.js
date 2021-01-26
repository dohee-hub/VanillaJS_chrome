const API_KEY = "f560150789d5b115b3cd365b6f9cb612";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

const weather = document.querySelector(".jsWeather");

// 날씨 가져오는 함수
function getWeather(lat, lon){
    fetch(`${WEATHER_API}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){ // e데이터 완전히 들어온 후 (fetch 후) 함수 호출 
        return response.json()
    }).then(function(json){
        const temperature = json.main.temp;
        const place =  json.name;
        weather.innerText = `${Math.floor(temperature)}° @ ${place}`;
    })
}

// 위도, 경도 저장
function saveCoords(coordsObj){
    localStorage.setItem("coords", JSON.stringify(coordsObj)); 
}

// 좌표 가져오는거 성공시
function handleGeoSucces(position){
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const coordsObj ={
        latitude: lat,
        longitude: lon
    };
    saveCoords(coordsObj);
    getWeather(lat, lon);
}

//좌표 가져오는거 실패시 
function handleGeoError(){
    console.log(`can't access geo location`);
}

//현재 좌표 가져오는 함수
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

//로컬스토리지에 위치 정보 있는지 확인 후 실행
function loadWeather(){
   const loadCoords = localStorage.getItem("coords");
   if(loadCoords === null){
       askForCoords(); //좌표 요청하는 함수
   }else{
       const objectCoords = JSON.parse(loadCoords);
       getWeather(objectCoords.latitude, objectCoords.longitude); //위 좌표 날씨 가져옴 
   }
}

//실행 함수
function init(){
    loadWeather();
}
init();