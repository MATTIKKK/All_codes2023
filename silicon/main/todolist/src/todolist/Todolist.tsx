import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "../App";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  id: string;
  title: string;
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
  changeCheckbox: Function;
  setNewFilter: (value: FilterValuesType, todolistId: string) => void;
  addTask: (title: string) => void;
  filterType: FilterValuesType;
};

const Todolist = (props: PropsType) => {
  const [newValue, setNewValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewValue(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    if (newValue.trim() !== "") {
      props.addTask(newValue.trim());
      setNewValue("");
      setError(null);
    }else{
      setError("Field is required");
    }
  };
  const handleClickAll = () => props.setNewFilter("all", props.id);
  const handleClickActive = () => props.setNewFilter("active", props.id);
  const handleClickCompleted = () => props.setNewFilter("completed", props.id);

  return (
    <div className="App">
      <div>
        <h3>{props.title}</h3>
        <div>
          <input
            value={newValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className={error ? "error" : ""}
          />
          <button onClick={addTask}>+</button>
          {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
          {props.tasks.map((t) => {
            const removeTask = () => {
              props.removeTask(t.id);
            };

            const handleChangeCheckbox = () => {
              props.changeCheckbox(t.id);
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
