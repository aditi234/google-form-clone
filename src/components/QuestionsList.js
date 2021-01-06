import React, { useState } from "react";
import Questions from "./Questions";
import { IoMdAddCircle } from 'react-icons/io';

function QuestionList() {
  const [ques, setQues] = useState([]);
  const addQuesHandler = (e) => {
    e.preventDefault();
    setQues([...ques, { qid: Math.random() * 1000 }]);
  };

  return (
    <div>
      {ques.map((q) => (
        <Questions ques={ques} setQues={setQues} keyy={q.qid} q={q} />
      ))}
      <button onClick={addQuesHandler}><IoMdAddCircle size="30px"/></button>
    </div>
  );
}

export default QuestionList;
