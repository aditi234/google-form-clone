import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%"
    }
  }
}));

function Title() {
  const classes = useStyles();
  return (
    <div class="box">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" placeholder="Untitled Form" />
        <TextField id="standard-basic" placeholder="Form Description" />
      </form>
    </div>
  );
}

export default Title;
