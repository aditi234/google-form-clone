import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "80%"
//     }
//   }
// }));

function Options({ text, option, setOption, op }) {
  const deleteHandler = () => {
    setOption(option.filter((el) => el.id !== op.id));
  };
  return (
    <div className="option">
      <input type="radio" id="option1"></input>
      <TextField value={text} for="option1"></TextField>
      <button onClick={deleteHandler}>del</button>
    </div>
  );
}

export default Options;
