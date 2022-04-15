import React from "react";
import Star from "./star";
import "./question.css";
import ProgressBar from "./progressBar";
import Answer from "./answer";
import { shuffleAnswer } from "../helper/suffleanswer";
const Question = ({ propsData }) => {
  const [ques, setQues] = React.useState(0);
  const [currentIndex, setcurrentIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [mamorize, mamorizeCorrectAnswer] = React.useState(0);
  const [clickedAnswer, setclickedAnswer] = React.useState();
  const newQuestion = () => {
    setcurrentIndex(currentIndex + 1);
  };
  console.log(propsData, "DATA");
  const { correct_answer, incorrect_answers } = propsData[currentIndex];

  const shuffleAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  // const allAnswers = shuffleAnswer(correct_answer, ...incorrect_answers);
  const check_answer = correct_answer.replace(/[%20]/gi, " ");
  const handleAnswer = (answer) => {
    if (answer === check_answer) {
      setScore(score + 1);
      mamorizeCorrectAnswer(check_answer);
      setclickedAnswer(answer);
    } else {
      mamorizeCorrectAnswer(0);
      setclickedAnswer(answer);
    }
  };
  return (
    <div>
      <h1 className="header">
        question {currentIndex + 1} of {Object.keys(propsData).length}
      </h1>
      <h3 className="entertainment">Entertainment : Board Games</h3>
      <Star />
      <div>
        <div className="question">
          {propsData[currentIndex].question.replace(/[%20]/gi, " ")}
        </div>
        <div style={{ marginTop: "40px", marginBottom: "50px" }}>
          {shuffleAnswers.map((answer) => (
            <Answer
              key={answer}
              correct_answer={correct_answer.replace(/[%20]/gi, " ")}
              mamorize={mamorize}
              clickedAnswer={clickedAnswer}
              submitAnswer={handleAnswer}
              answer={answer.replace(/[%20]/gi, " ")}
            />
          ))}
        </div>
        <p className="corrct">CORRECT</p>
        <button onClick={newQuestion} className="submit">
          Next Question
        </button>
        {score}
        <ProgressBar />
      </div>
    </div>
  );
};

export default Question;
