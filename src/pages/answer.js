import React from "react";
import "./answer.css";
function Answer({
  answer,
  mamorize,
  submitAnswer,
  correct_answer,
  clickedAnswer,
}) {
  return (
    <div
      className="answer-css"
      // className={
      //   mamorize === answer
      //     ? "correct"
      //     : clickedAnswer === answer
      //     ? "incorrect"
      //     : "answer-css"
      // }
    >
      <span
        className="answer-cs"
        // disabled={clickedAnswer ? true : false}
        onClick={() => submitAnswer(answer)}
      >
        {answer}
      </span>
    </div>
  );
}

export default Answer;
