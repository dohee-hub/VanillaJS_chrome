const nameBox = document.querySelector(".jsName");

//저장되있는 이름 나오게 하는 함수
function paintName(user){
    nameBox.innerHTML = " "; //이름 입력하면 nameBox는 안 보이게함
    const title =  document.createElement("span");
    title.className ="name_text";
    title.innerHTML =`${user} Welcome`;
    nameBox.appendChild(title);
}

//이름 입력 후 엔터(이벤트)시 실행 함수
function handleSubmit(event){
    event.preventDefault(); // 엔터시 새로고침 되는 기본값 막아줌
    const form  = event.target;
    const input = form.querySelector("input");
    const name =  input.value;
    localStorage.setItem("username", name); //로컬스토리지에 이름 저장
    paintName(name); //이름 나오게 하는 함수
}

//이름 입력 함수
function inputName(){
    const input = document.createElement("input");
    input.placeholder = "What's your name?";
    input.type = "text";
    input.className = "name_input";
    const form = document.createElement("form");
    form.addEventListener("submit", handleSubmit); 
    form.appendChild(input);
    nameBox.appendChild(form);
}

//로컬스토리지에 이름 있는지 확인
function loadName(){
    const userName = localStorage.getItem("username");
    if(userName === null){
        inputName();
    }else{
        paintName(userName);
    }
}
//실행함수
function init(){
    loadName();
}
init();