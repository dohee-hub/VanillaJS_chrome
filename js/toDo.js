const form = document.querySelector(".jsToDo"),
    input = document.querySelector(".jsAddToDo"),
    list = document.querySelector(".jsList");

let toDos = []; //해야 할 일들 배열로 저장

//로컬스토리지에 todo 저장
function localToDos(){
    const stringToDo = JSON.stringify(toDos); //string형으로 변경하여 줌
    localStorage.setItem("toDos", stringToDo);
}

// todo 배열 저장하는 함수
function saveToDo(text){
    const toDoObj =  {
        id: toDos.length+1,
        value: text
    }; 
    toDos.push(toDoObj); //배열에 저장 
    localToDos();    
}

// 삭제 버튼 누르면 실행 
function handleDelete(event){
    const target = event.target;
    const li = target.parentElement;
    const ul = li.parentElement;
    const toDoId = li.id;
    ul.removeChild(li);
    toDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(toDoId);
    }); //로컬스토리지에 저장된 toDO에 아이디와 li에 아이디가 같지 않은 것만 추출
    localToDos();
}

//할일 추가하는 함수
function addToDo(text){
    const toDo =  document.createElement("li");
    toDo.className = "toDo";
    toDo.id =  toDos.length +1; //배열의 길이 0부터 시작
    const delBtn = document.createElement("span");
    delBtn.innerHTML = "❌";
    delBtn.className = "delBtn";
    delBtn.addEventListener("click", handleDelete);
    const label =  document.createElement("label");
    label.innerHTML = text; //label에 입력한 텍스트 넣기
    toDo.appendChild(delBtn);
    toDo.appendChild(label);
    list.appendChild(toDo);
    saveToDo(text);
}

//할일 입력 후 제출(이벤트)시 실행 함수
function onSubmit(event){
    event.preventDefault();
    const value =  input.value;
    addToDo(value);
    input.value = ""; // input 비어있게 나오게함 
}

//로컬스토리지에 해야할일 가져옴
function loadToDos(){
    const loadToDos =  localStorage.getItem("toDos");
    if(loadToDos !== null){
        const objectToDo = JSON.parse(loadToDos); //로컬스토리지 string형 배열 -> object로 변경
        objectToDo.forEach(function(toDo){
            addToDo(toDo.value);
        }); //배열에 담긴거 한번씩 실행 
    }
}

//실행 함수 
function init(){
    loadToDos();
    form.addEventListener("submit", onSubmit);   
}


init();