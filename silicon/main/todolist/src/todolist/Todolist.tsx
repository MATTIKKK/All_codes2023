import React from "react";
import { FilterValuesType } from "../App";
import AddItemForm from "../addItemForm/AddItemForm";
import { Delete, Favorite, FavoriteBorder } from "@material-ui/icons";
import { Button, Checkbox, Grid, IconButton } from "@material-ui/core";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  id: string;
  title: string;
  tasks: Array<TaskType>;
  removeTask: (id: string, todolistId: string) => void;
  changeCheckbox: Function;
  setNewFilter: (value: FilterValuesType, todolistId: string) => void;
  addTask: (title: string, todolistId: string) => void;
  filterType: FilterValuesType;
  removeTodolist: (todolistId: string) => void;
};

const Todolist = (props: PropsType) => {
  const removeTodolist = () => props.removeTodolist(props.id);

  const handleClickAll = () => props.setNewFilter("all", props.id);
  const handleClickActive = () => props.setNewFilter("active", props.id);
  const handleClickCompleted = () => props.setNewFilter("completed", props.id);

  const addTask = (title: string) => {
    props.addTask(title, props.id);
  };

  return (
    <div className="App">
      <div>
        <h3>
          {props.title}
          <IconButton onClick={removeTodolist}>
            <Delete />
          </IconButton>
        </h3>

        <Grid container style={ { padding: "10px" } }>
          <AddItemForm addTask={addTask} />
        </Grid>
        <ul>
          {props.tasks.map((t) => {
            const removeTask = () => {
              props.removeTask(t.id, props.id);
            };

            const handleChangeCheckbox = (e: any) => {
              props.changeCheckbox(t.id, e.target.checked, props.id);
            };

            return (
              <li key={t.id} className={t.isDone ? "is-done" : ""}>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  checked={t.isDone}
                  onClick={handleChangeCheckbox}
                />
                <span>{t.title}</span>
                <IconButton onClick={removeTask}>
                  <Delete />
                </IconButton>
              </li>
            );
          })}
        </ul>
        <div>
          <Button
          variant={props.filterType === "all" ? "contained" : "text"}
            onClick={handleClickAll}

          >
            All
          </Button>
          <Button
            color={'primary'}
            onClick={handleClickActive}
            variant={props.filterType === "active" ? "contained" : "text"}
          >
            Active
          </Button>
          <Button
            color={'secondary'}
            onClick={handleClickCompleted}
            variant={props.filterType === "completed" ? "contained" : "text"}
          >
            Completed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
