import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Options from "./Options";
import ImageOptions from "./ImageOptions";
import { GrFormTrash } from "react-icons/gr";
import { BsFillImageFill } from "react-icons/bs";
import { storage } from "../config/firebaseConfig";
import { IoMdAddCircle } from "react-icons/io";

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
  const [textOption, setTextOption] = useState([]);
  const [ans, setAns] = useState("");
  const [url, setUrl] = useState("");
  // const [uploading,setUploading]=useState("false");
  const [imageOption, setImageOption] = useState([]);

  //updating question
  const InputQuesHandler = (e) => {
    setInputQues(e.target.value);
  };

  const setAnsHandler = (e) => {
    setAns(e.target.value);
  };

  //udpating option list only text(adding options)
  const addTextOptionHandler = (e) => {
    e.preventDefault();
    setTextOption([...textOption, { text: ans, id: Math.random() * 1000 }]);
    setAns("");
  };
  //updating option list only image(adding options)
  const addImageOptionHandler = (e) => {
    if (e.target.files[0]) {
      // setUploading("true");
      const image = e.target.files[0];
      console.log(image.name);
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              setImageOption([
                ...imageOption,
                { URL: url, imageId: Math.random() }
              ]);
              setUrl("");
              // setUploading("false");
              console.log(url);
            });
        }
      );
    }
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
          <label id="add">
            <IoMdAddCircle size="25px" onClick={addTextOptionHandler} />
          </label>
          <label htmlFor="single">
            <BsFillImageFill size="25px" />
          </label>
          <input type="file" id="single" onChange={addImageOptionHandler} />
          <div>
            {textOption.map((op) => (
              <Options
                text={op.text}
                textOption={textOption}
                setTextOption={setTextOption}
                key={op.id}
                op={op}
              />
            ))}
            {imageOption.map((im) => (
              <ImageOptions
                URL={im.URL}
                imageOption={imageOption}
                setImageOption={setImageOption}
                im={im}
                // uploading={uploading}
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
      <button onClick={deleteQuesHandler}>
        <GrFormTrash size="25px" />
      </button>
    </div>
  );
}

export default Questions;
