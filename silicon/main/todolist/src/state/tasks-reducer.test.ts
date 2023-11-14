import { TaskStateType } from "../App";
import { AddTodolistActionType, ChangeTaskStatusActionType, tasksReducer } from "./tasks-reducer";

test('correct task should be deleted from correct array', () => {
    const startState: TaskStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: false},
            {id: "3", title: "REACT", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "bread", isDone: true},
            {id: "2", title: "milk", isDone: false},
            {id: "3", title: "tea", isDone: false}
        ]
    }

    const endState = tasksReducer(startState, {
        type: 'REMOVE-TASK',
        todolistId: "todolistId2",
        taskId: "2"
    })

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(2);
    expect(endState["todolistId2"].every(t => t.id != "2")).toBeTruthy();
})

test('correct task should be added from correct array', () => {
    const startState: TaskStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: false},
            {id: "3", title: "REACT", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "bread", isDone: true},
            {id: "2", title: "milk", isDone: false},
            {id: "3", title: "tea", isDone: false}
        ]
    }

    const endState = tasksReducer(startState, {
        type: 'ADD-TASK',
        todolistId: "todolistId2",
        title: "juice"
    })

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].title).toBe("juice")
})

test('status of specified task should be changed', () => {
    const startState: TaskStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: false},
            {id: "3", title: "REACT", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "bread", isDone: true},
            {id: "2", title: "milk", isDone: false},
            {id: "3", title: "tea", isDone: false}
        ]
    }

    const action: ChangeTaskStatusActionType = {
        type: 'CHANGE-TASK-STATUS',
        todolistId: "todolistId2",
        taskId: "2",
        isDone: false
    }

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId2"][1].isDone).toBeFalsy();

})


test('title of specified task should be changed', () => {
    const startState: TaskStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: false},
            {id: "3", title: "REACT", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "bread", isDone: true},
            {id: "2", title: "milk", isDone: false},
            {id: "3", title: "tea", isDone: false}
        ]
    }

    const endState = tasksReducer(startState, {
        type: 'CHANGE-TASK-TITLE',
        todolistId: "todolistId2",
        taskId: "2",
        title: "milkiway"
    })

    expect(endState["todolistId2"][1].title).toBe("milkiway");

})

test('new property with new array should be added when new todolist added', () => {
    const startState: TaskStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: false},
            {id: "3", title: "REACT", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "bread", isDone: true},
            {id: "2", title: "milk", isDone: false},
            {id: "3", title: "tea", isDone: false}
        ]
    }

    const action: AddTodolistActionType = {
        type: 'ADD_TODOLIST',
        title: "title no matter"
    }

    const endState = tasksReducer(startState, action)

    const keys = Object.keys(endState);
    const newKey = keys.find( k => k!= "todolistId1" && k != "todolistId2");
    if (!newKey){
        throw Error("no addded")
    }

    expect(keys.length).toBe(3);

})