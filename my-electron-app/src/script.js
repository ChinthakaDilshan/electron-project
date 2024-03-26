const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click',function(){
    const li = document.createElement('li');
    const text = document.createTextNode(todoInput.value);

    const doneBtn = document.createElement('button');
    doneBtn.textContent = "done";
    doneBtn.classList.add('done-btn');

    doneBtn.addEventListener('click',function(){
        li.classList.toggle('completed');
    })

    li.appendChild(text);
    li.appendChild(doneBtn)
    todoList.appendChild(li);
    todoInput.value= '';
})