import { TextField } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";

type EditableSpanPropsType = {
  title: string;
  handleChangeTitle: (title: string) => void;

};

const EditableSpan = (props: EditableSpanPropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") deactivateEditMode();
  };

  const activateEditMode = () => {
    setEditMode(true);
    setTitle(props.title);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.handleChangeTitle(title);
  };


  return editMode ? (
    <TextField
      value={title}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      onBlur={deactivateEditMode}
      autoFocus
    />
  ) : (
    <span onDoubleClick={activateEditMode}>{props.title}</span>
  );
};

export default EditableSpan;
