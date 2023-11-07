import React, { useState } from "react";
import "./App.css";
import Todolist, { TaskType } from "./todolist/Todolist";
import { v1 } from "uuid";
import AddItemForm from "./addItemForm/AddItemForm";

export type FilterValuesType = "all" | "active" | "completed";

type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

function App() {
  let todolist1 = v1();
  let todolist2 = v1();

  const [todolists, setTodolists] = useState<Array<TodolistType>>([]);

  const [tasksObj, setTasks] = useState({
    [todolist1]: [
      { id: v1(), title: "HTML&CSS", isDone: true },
      { id: v1(), title: "JS", isDone: false },
      { id: v1(), title: "REACT", isDone: true },
      { id: v1(), title: "Redux", isDone: false },
    ],
    [todolist2]: [
      { id: v1(), title: "book", isDone: true },
      { id: v1(), title: "paper", isDone: false },
    ],
  });

  const removeTask = (id: string, todolistId: string) => {
    let tasks = tasksObj[todolistId];
    let filteredTasks = tasks.filter((t) => t.id !== id);
    tasksObj[todolistId] = filteredTasks;
    setTasks({ ...tasksObj });
  };

  const changeCheckbox = (id: string, value: boolean, todolistId: string) => {
    let tasks = tasksObj[todolistId];
    let task = tasks.find((t) => t.id === id);
    if (task) {
      task.isDone = value;
      setTasks({ ...tasksObj });
    }
  };

  const setNewFilter = (value: FilterValuesType, todolistId: string) => {
    let todolist = todolists.find((tl) => tl.id === todolistId);
    if (todolist) {
      todolist.filter = value;
      setTodolists([...todolists]);
    }
  };

  const addTask = (title: string, todolistId: string) => {
    let task = { id: v1(), title, isDone: false };
    let tasks = tasksObj[todolistId];
    let newTasks = [task, ...tasks];
    tasksObj[todolistId] = newTasks;
    setTasks({ ...tasksObj });
  };

  const removeTodolist = (todolistId: string) => {
      let filteredTodolists = todolists.filter(tl => tl.id !== todolistId);
      setTodolists(filteredTodolists);
      delete tasksObj[todolistId];
      setTasks({...tasksObj});   
  }

  const addTodolist = (title: string) => {
    let newTodolistId = v1();
    let newTodolist: TodolistType = {id: newTodolistId, title, filter: "all"};
    setTodolists([newTodolist, ...todolists]);
    setTasks({
      ...tasksObj, 
      [newTodolistId]: []
    })
  }

  return (
    <div className="App">
      <AddItemForm addTask={addTodolist}/>

      {todolists.map((tl) => {
        let mainTasks = tasksObj[tl.id];
        if (tl.filter === "completed") {
          mainTasks = mainTasks.filter((t) => t.isDone === true);
        }
        if (tl.filter === "active") {
          mainTasks = mainTasks.filter((t) => t.isDone === false);
        }

        return (
          <Todolist
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={mainTasks}
            removeTask={removeTask}
            changeCheckbox={changeCheckbox}
            setNewFilter={setNewFilter}
            addTask={addTask}
            filterType={tl.filter}
            removeTodolist={removeTodolist}
          />
        );
      })}
    </div>
  );
}

export default App;
