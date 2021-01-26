const clock = document.querySelector(".jsClock .clock");

//시간 가져오는 함수
function getTime(){
    const now =  new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const time = `${hours <  10 ? `0${hours}`: hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
    clock.innerHTML = time;
}

//실행 함수
function init(){
    getTime();
    setInterval(getTime, 1000); // 1초마다 getTime 함수 실행
}

init();