import React, { useState } from "react";
import "./App.css";
import Todolist, { TaskType } from "./todolist/Todolist";
import { v1 } from "uuid";
import AddItemForm from "./addItemForm/AddItemForm";
import { Container, Grid, Paper } from "@material-ui/core";

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

export type TaskStateType = {
  [key: string]: Array<TaskType>;
};

function App() {
  const [todolists, setTodolists] = useState<Array<TodolistType>>([]);

  const [tasksObj, setTasks] = useState<TaskStateType>({});

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

  const handleChangeTitle = (
    taskId: string,
    title: string,
    todolistId: string
  ) => {
    let tasks = tasksObj[todolistId];
    let task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.title = title;
    }

    setTasks({ ...tasksObj });
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
    let filteredTodolists = todolists.filter((tl) => tl.id !== todolistId);
    setTodolists(filteredTodolists);
    delete tasksObj[todolistId];
    setTasks({ ...tasksObj });
  };

  const addTodolist = (title: string) => {
    let newTodolistId = v1();
    let newTodolist: TodolistType = { id: newTodolistId, title, filter: "all" };
    setTodolists([newTodolist, ...todolists]);
    setTasks({
      ...tasksObj,
      [newTodolistId]: [],
    });
  };

  const changeTodolistTitle = (title: string, todolistId: string) => {
    const todolist = todolists.find(t => t.id === todolistId);
    if(todolist){
      todolist.title = title;
      setTodolists([...todolists]);
    }
  }

  return (
    <div className="App">
      <Container fixed>
        <Grid container style={{ padding: "20px" }}>
          <AddItemForm addTask={addTodolist} />
        </Grid>

        <Grid container spacing={7}>
          {todolists.map((tl) => {
            let mainTasks = tasksObj[tl.id];

            if (tl.filter === "completed") {
              mainTasks = mainTasks.filter((t) => t.isDone === true);
            }

            if (tl.filter === "active") {
              mainTasks = mainTasks.filter((t) => t.isDone === false);
            }

            return (
              <Grid item>
                <Paper style={{ padding: "20px" }}>
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
                    handleChangeTitle={handleChangeTitle}
                    changeTodolistTitle={changeTodolistTitle}
                  />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
