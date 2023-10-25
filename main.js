const todoInput = document.getElementById('todo_input')
const addTodoButton = document.getElementById('add_todo_btn')
const todoList = document.getElementById('todoList')
const radioBtnBusiness = document.getElementById('radio_btn_business')
addTodoButton.onclick = function () {
    if (todoInput.value.length === 0){
        return
    }
    todoList.insertAdjacentHTML('beforeend',
        `<li class="list-group-item">
                <div class="list-group-item-left">
                    <label class="todo-list-radio">
                        <input type="checkbox">
                        <span class="radio-btn personal"></span>
                    </label>
                    <span class="todo-task-text">${todoInput.value}</span>
                </div>

                <span class="todo-buttons">
                    <button class="btn btn-edit-task">Edit</button>
                    <button class="btn btn-edit-delete">Delete</button>
                </span>
            </li>`)
    todoInput.value = ''
}