import React, { ChangeEvent, KeyboardEvent, useState } from "react";

type AddItemFormPropsType = {
  addTask: (newValue: string) => void;
};

const AddItemForm =(props: AddItemFormPropsType) => {
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
    } else {
      setError("Field is required");
    }
  };

  return (
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
  );
}

export default AddItemForm;
