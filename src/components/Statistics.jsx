import "./Statistics.css";
import { useContext } from "react";
import { quizContext } from "./Quiz";
// import Questions from "./Questions";

function QuestionsBoxesList() {
  const { questions, currentQuestion, answers } = useContext(quizContext);

  function checkStatus(index) {
    if (currentQuestion === index) {
      return "box current";
    } else if (index > currentQuestion) {
      return "box";
    } else {
      if (answers[index]) {
        return "box true-answer";
      } else {
        return "box false-answer";
      }
    }
  }

  const boxesList = questions.map((question, index) => {
    return (
      <div key={index} {...{ className: checkStatus(index) }}>
        {index + 1}
      </div>
    );
  });
  return boxesList;
}

function RightResults() {
  const { answers } = useContext(quizContext);
  const rightScore = answers.filter((answer) => answer).length;
  return <div className="rightResults">{rightScore}</div>;
}

export default function Statistics() {
  return (
    <>
      {/* <h3>Statistics</h3> */}
      <div className="statistics">
        <QuestionsBoxesList />
        <RightResults />
      </div>
    </>
  );
}
