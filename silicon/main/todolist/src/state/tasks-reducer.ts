import { v1 } from "uuid";
import { FilterValuesType, TaskStateType, TodolistType } from "../App";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string,
    taskId: string
}

export type AddTaskActionType = {
    type: 'ADD-TASK',
    todolistId: string,
    title: string
}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    todolistId: string,
    taskId: string,
    isDone: boolean
}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    todolistId: string,
    taskId: string,
    title: string
}

export type AddTodolistActionType = {
    type: 'ADD_TODOLIST',
    title: string
}




export type ActionsType = RemoveTaskActionType |  AddTaskActionType | ChangeTaskStatusActionType | ChangeTaskTitleActionType | AddTodolistActionType


export const tasksReducer = (state: TaskStateType, action: ActionsType): TaskStateType => {
    switch (action.type) {
        case 'REMOVE-TASK' : {
            const stateCopy = {...state};
            const tasks = state[action.todolistId];
            const filteredTasks = tasks.filter(t => t.id !== action.taskId);
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy;
        }

        case 'ADD-TASK' : {
            const stateCopy = {...state};
            const tasks = state[action.todolistId];
            const newTask = {id: v1(), title: action.title, isDone: false};
            const newTasks = [newTask, ...tasks]
            stateCopy[action.todolistId] = newTasks;
            return stateCopy;
        }

        case 'CHANGE-TASK-STATUS' : {
            const stateCopy = {...state};
            let tasks = stateCopy[action.todolistId];
            let task = tasks.find((t) => t.id === action.taskId);
            if (task) {
                task.isDone = action.isDone;

            }
            return stateCopy;
        }

        case 'CHANGE-TASK-TITLE' : {
            const stateCopy = {...state};
            let tasks = stateCopy[action.todolistId];
            let task = tasks.find((t) => t.id === action.taskId);
            if (task) {
                task.title = action.title;

            }
            return stateCopy;
        }

        case 'ADD_TODOLIST' : {
            const stateCopy = {...state};
            stateCopy[v1()] = [];
            return stateCopy;
        }


        default:
            throw new Error("I don't understand this action type") 
    }
}