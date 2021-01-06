import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Options from "./Options";
import { GrFormTrash } from 'react-icons/gr';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%"
    }
  }
}));

function Questions({ ques, setQues, q, keyy }) {
  const classes = useStyles();
  const [answerType, setAnswerType] = useState("3");
  const [inputQues, setInputQues] = useState("");
  const [option, setOption] = useState([]);
  const [ans, setAns] = useState("");

  //updating question
  const InputQuesHandler = (e) => {
    setInputQues(e.target.value);
  };

  const setAnsHandler = (e) => {
    setAns(e.target.value);
  };

  //udpating option list(adding options)
  const addOptionHandler = (e) => {
    e.preventDefault();
    setOption([...option, { text: ans, id: Math.random() * 1000 }]);
    setAns("");
  };

  //Drop down list
  const statusHandler = (e) => {
    setAnswerType(e.target.value);
  };
  function renderElement() {
    if (answerType === "1") {
      return (
        <div>
          <TextField id="standard-basic" placeholder="Short Answer" />
        </div>
      );
    } else if (answerType === "2") {
      return (
        <div>
          <TextField id="standard-basic" placeholder="Long Answer" />
        </div>
      );
    } else {
      return (
        <div>
          <TextField
            value={ans}
            onChange={setAnsHandler}
            id="standard-basic"
            placeholder="Enter Option"
          />
          <button onClick={addOptionHandler}>Add Option</button>
          <div>
            {option.map((op) => (
              <Options
                text={op.text}
                option={option}
                setOption={setOption}
                key={op.id}
                op={op}
              />
            ))}
          </div>
        </div>
      );
    }
  }
  /////////////////

  //deleting complete question
  const deleteQuesHandler = () => {
    const newList = ques.filter((el) => el.qid !== q.qid);
    setQues(newList);
    console.log(q.qid);
  };
  return (
    <div className="box">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={inputQues}
          onChange={InputQuesHandler}
          id="standard-basic"
          placeholder="Untitled Question"
        />

        <select onChange={statusHandler} style={{ width: "115px" }}>
          <option value="1">Short Answer</option>
          <option value="2">Long Answer</option>
          <option value="3" selected>
            Mutiple Choice
          </option>
        </select>
        <div class="answer">{renderElement()}</div>
      </form>
      <button onClick={deleteQuesHandler}><GrFormTrash size="25px"/></button>
    </div>
  );
}

export default Questions;
