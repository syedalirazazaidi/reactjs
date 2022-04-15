import React from "react";
import data from "../db/question.json";
import Question from "./question";
function Quiz() {
  const [jsondata, setjsondata] = React.useState(data);

  return (
    <div style={{ marginTop: "15rem", marginRight: "10rem" }}>
      <Question propsData={jsondata} />
    </div>
  );
}

export default Quiz;
