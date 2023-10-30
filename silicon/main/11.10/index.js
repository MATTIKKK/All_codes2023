const parent = document.getElementById('parent');


const createTodoInput = document.getElementById('createTodoInput');


let todolist = [
    {
        id: '123',
        title: 'my things 1'
    },
    {
        id: '321',
        title: 'my things 2'
    }
]

const tasks = {
    '123': [
        {id: 1111, title: 'bread', isDone: true},
        {id: 2222, title: 'milk', isDone: true},
        {id: 3333, title: 'book', isDone: false},
    ],
    '321': [
        {id: 2222, title: 'milk', isDone: true},
        {id: 3333, title: 'book', isDone: true},
    ]
}

//BLL
const addTodoBLL = (title) => {
    const id = Date.now();
    todolist.push({
        title,
        id
    })
    tasks[id] = [];
}

const deleteTodoBLL = (id) => {
    todolist = todolist.filter(todo => todo.id !== id);
    delete tasks[id];
}


//UI
const addTodoUI = () => {
    addTodoBLL(createTodoInput.value)

    createTodoInput.value = '';
    render();
}

const deleteTodoUI = (id) => {
    deleteTodoBLL(id)
    render();
}

const deleteTaskUI = (todoId, taskId) => {
    tasks[todoId] = tasks[todoId].filter(t => t.id !== taskId);
    render();
}

const render = () => {
    parent.innerHTML = '';


    todolist.forEach((todo) => {

        const wrapperTodo = document.createElement('div');
        const display = document.createElement('div');
        const h5 = document.createElement('h5');
        h5.innerText = todo.title;

        const buttonX = document.createElement('button');
        buttonX.innerText = 'x';
        buttonX.onclick = () => deleteTodoUI(todo.id)
        display.append(h5, buttonX);

        const input = document.createElement('input');
        const button = document.createElement('button');
        button.innerText = 'x'

        const wrapperOfTasks = document.createElement('ul');

        tasks[todo.id].forEach(t => {
            const li = document.createElement('li');
            const input = document.createElement('input');
            input.type = 'checkbox';

            const span = document.createElement('span');
            span.innerText = t.title;

            const button = document.createElement('button');
            button.innerText = 'x'
            button.onclick = () => deleteTaskUI(todo.id, t.id)



            li.append(input, span, button)
            wrapperOfTasks.appendChild(li);
        })



        wrapperTodo.append(display, input, button, wrapperOfTasks);
        parent.appendChild(wrapperTodo);
    })

}

render()