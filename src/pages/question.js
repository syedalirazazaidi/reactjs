import React from "react";
import Star from "./star";
import "./question.css";
import ProgressBar from "./progressBar";
const Question = ({ propsData }) => {
  const [ques, setQues] = React.useState(0);
  const setQu = () => {
    setQues(ques + 1);
  };
  const suffleanswer = [];
  // console.log(propsData[0].incorrect_answers);
  // suffleanswer.push(
  //   propsData[0].incorrect_answers,
  //   propsData[0].correct_answer
  // );
  // console.log(suffleanswer);

  // const arr = suffleanswer.sort(() => Math.random() - 0.5);
  // console.log(arr);
  console.log(propsData[0].incorrect_answers[0]);
  console.log(propsData.length, "lllllllllll");
  return (
    <div>
      <h1 className="header">question 1 of 20</h1>
      <h3 className="entertainment">Entertainment : Board Games</h3>
      <Star />
      <div>
        <div className="question">
          {propsData[ques].question.replace(/[%20]/gi, " ")}
        </div>
        <div className="answer">
          <button className="btn-one" onClick={setQu}>
            {propsData[ques].correct_answer.replace(/[%20]/gi, " ")}
          </button>

          <button className="btn-two" onClick={setQu}>
            {propsData[ques].incorrect_answers[0].replace(/[%20]/gi, " ")}
          </button>
          <button className="btn-three" onClick={setQu}>
            {propsData[ques].incorrect_answers[1].replace(/[%20]/gi, " ")}
          </button>
          <button className="btn-four" onClick={setQu}>
            {propsData[ques].incorrect_answers[2].replace(/[%20]/gi, " ")}
          </button>
        </div>
        <ProgressBar />
      </div>
    </div>
  );
};

export default Question;
