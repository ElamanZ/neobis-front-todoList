const todoInput = document.getElementById('todo_input')
const addTodoButton = document.getElementById('add_todo_btn')
const todoList = document.getElementById('todoList')
const radioBtnPersonal = document.getElementById('radio_btn_personal')

const notes = []

function render() {
    todoList.innerHTML = ''
    for (let i = 0; i < notes.length; i++) {
        todoList.insertAdjacentHTML('beforeend', noteTemplate(notes[i], i));
    }
}
render()

todoList.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type === 'toggleTask') {
            notes[index].completed = !notes[index].completed
        }else if (type === 'delete') {
            notes.splice(index, 1)
        }else if (type === 'edit') {
            const editText = document.querySelector('#editText')
            editText.setAttribute('contenteditable', 'true')
            editText.focus()

            const textNode = editText.firstChild;
            const range = document.createRange();
            const sel = window.getSelection();
            range.setStart(textNode, textNode.length);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);

            editText.addEventListener('blur', function () {
                notes[index].title = editText.textContent;
                editText.contentEditable = false;
                render();

            })
            return
        }
        render()
    }
}

addTodoButton.onclick = function () {
    if (todoInput.value.length === 0){
        return;
    }
    const newNote = {
        title: todoInput.value,
        completed: false,
        category: radioBtnPersonal.checked ? 'personal' : 'business'
    }

    notes.push(newNote)

    render();

    todoInput.value = '';
}

function noteTemplate (newNote, index) {
    return `
              <li class="list-group-item">
                <div class="list-group-item-left">
                    <label class="todo-list-radio">
                        <input type="checkbox" id="task_checkbox" data-index="${index}" data-type="toggleTask">
                        <span class="radio-btn ${newNote.category}"></span>
                    </label> 
                    <span id="editText" class="todo-task-text ${newNote.completed ? 'task-done' : ''}" data-index="${index}" >${newNote.title}</span>
                </div>

                <span class="todo-buttons">
                    <button itemid="editbtn" class="btn btn-edit-task" id="editBtn" data-index="${index}" data-type="edit">Edit</button>
                    <button class="btn btn-edit-delete" data-index="${index}" data-type="delete">Delete</button>
                </span>
            </li>`
}

