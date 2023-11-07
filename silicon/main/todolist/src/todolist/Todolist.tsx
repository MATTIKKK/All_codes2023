import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "../App";
import AddItemForm from "../addItemForm/AddItemForm";

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
    props.addTask(title, props.id)
  }


  return (
    <div className="App">
      <div>
        <h3>
          {props.title}
          <button onClick={removeTodolist}>X</button>
        </h3>

        <AddItemForm addTask={addTask} />
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
                <input
                  type="checkbox"
                  checked={t.isDone}
                  onClick={handleChangeCheckbox}
                />
                <span>{t.title}</span>
                <button onClick={removeTask}>X</button>
              </li>
            );
          })}
        </ul>
        <div>
          <button
            onClick={handleClickAll}
            className={props.filterType === "all" ? "active-filter" : ""}
          >
            All
          </button>
          <button
            onClick={handleClickActive}
            className={props.filterType === "active" ? "active-filter" : ""}
          >
            Active
          </button>
          <button
            onClick={handleClickCompleted}
            className={props.filterType === "completed" ? "active-filter" : ""}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todolist;

