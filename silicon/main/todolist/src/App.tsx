import React, { useState } from "react";
import "./App.css";
import Todolist, { TaskType } from "./todolist/Todolist";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

function App() {
  const [todolists, setTodolists] = useState<Array<TodolistType> >([
    {
      id: v1(),
      title: "What to learn",
      filter: "active",
    },
    {
      id: v1(),
      title: "What to buy",
      filter: "all",
    },
  ]);

  let initTasks = [
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: false },
    { id: v1(), title: "REACT", isDone: true },
    { id: v1(), title: "Redux", isDone: false },
  ];

  const [tasks, setTasks] = useState<Array<TaskType>>(initTasks);

  const removeTask = (id: string) => {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  };

  const changeCheckbox = (id: string) => {
    const ChangedTasks = tasks.map((t) => {
      if (t.id === id) {
        t.isDone = !t.isDone;
        return t;
      }
      return t;
    });

    setTasks(ChangedTasks);
  };

  const setNewFilter = (value: FilterValuesType, todolistId: string) => {
    let todolist = todolists.find(tl => tl.id === todolistId);
    if(todolist){
      todolist.filter = value;
      setTodolists([...todolists]);
    }
  }

  const addTask = (title: string) => {
    let newTasks = [{ id: v1(), title, isDone: false }, ...tasks];
    setTasks(newTasks);
  };

  return (
    <div className="App">
      {todolists.map((tl) => {
        let mainTasks = tasks;
        if (tl.filter === "completed") {
          mainTasks = tasks.filter((t) => t.isDone === true);
        }
        if (tl.filter === "active") {
          mainTasks = tasks.filter((t) => t.isDone === false);
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
          />
        );
      })}
    </div>
  );
}

export default App;
