import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { GrFormTrash } from "react-icons/gr";


function Options({ text, textOption, setTextOption, op }) {
  const deleteHandler = () => {
    setTextOption(textOption.filter((el) => el.id !== op.id));
  };
  return (
    <div className="option">
      <input type="radio" id="option1"></input>
      <TextField value={text} for="option1"></TextField>
      <button onClick={deleteHandler}>
      <GrFormTrash size="20px" />
      </button>
    </div>
  );
}

export default Options;
