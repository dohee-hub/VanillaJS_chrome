const body = document.querySelector("body");
const IMG_Number = 4; //이미지 갯수에 따라 달라짐

// 배경이미지 주는 함수
function paintImg(imgNum){
    const img = new Image();
    img.src = `img/${imgNum + 1}.jpg`;
    img.classList.add('bgImg'); //class명 추가
    body.prepend(img); // 콘텐츠 선택한 부분 요소 내부의 시작 부분에서 삽입 
}

// 랜덤 숫자 가져오는 함수
function getRandom(){
    const num = Math.floor(Math.random() * IMG_Number); // 1-4까지 랜덤으로 숫자 floor:내림, ceil: 올림
    return num;
}

// 실행 함수
function init(){
    const randomNumber = getRandom();
    paintImg(randomNumber);
}
init();