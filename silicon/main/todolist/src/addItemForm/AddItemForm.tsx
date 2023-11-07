import { Button, IconButton, TextField } from "@material-ui/core";
import { ControlPoint } from "@material-ui/icons";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";

type AddItemFormPropsType = {
  addTask: (newValue: string) => void;
};

const AddItemForm = (props: AddItemFormPropsType) => {
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
      <TextField
        label={'text input'}
        value={newValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        error={!!error}
        helperText={error}
      />
      <IconButton onClick={addTask} color={'primary'}>
        <ControlPoint />
      </IconButton>

    </div>
  );
};

export default AddItemForm;
