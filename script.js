const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const date = new Date();
let dateFormat = `${date.getDate()} / ${monthNames[date.getMonth()]} /  ${date.getFullYear()}`;

let dateDiv = document.querySelector('.date');
dateDiv.innerHTML = dateFormat;

let tasksArray = [];
let html = '';

function addTodoFunc() {
    let todoInput = document.querySelector('#todoInput').value;
    tasksArray.push(todoInput);
    renderTasks();
}

function deleteTodo(index) {
    tasksArray.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    html = '';
    
    for (let i = 0; i < tasksArray.length; i++) {
        html += `<div class="todoTask">
                    <p class="todo" id='todo'>${tasksArray[i]}</p>
                    <div class="btns">
                        <button class="delete" onclick='deleteTodo(${i})'>
                            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/filled-trash.png" alt="filled-trash" />
                        </button>
                    </div>
                </div><br>`;
    }
    if(todoInput.value===0){
        alert('Enter a task')
    }
    document.querySelector('.todoList').innerHTML = html;
}


