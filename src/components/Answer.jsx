import "./Answer.css";
import { quizContext } from "./Quiz.jsx";
import { useContext, useEffect, useState } from "react";

// export default function Answer({ answer }) {
//   const {
//     questions,
//     currentQuestion,
//     answers,
//     setAnswers,
//     setCurrentQuestion,
//   } = useContext(quizContext);
//   function handleAnswer(e) {
//     const trueAnswer = questions[currentQuestion].correctAnswer;
//     const currentAnswer = e.target.textContent;

//     setCurrentQuestion(currentQuestion + 1);
//     if (currentAnswer === trueAnswer) {
//       setAnswers([...answers, true]);
//     } else {
//       setAnswers([...answers, false]);
//     }
//   }

//   return (
//     <div className="answer" onClick={handleAnswer}>
//       {answer}
//     </div>
//   );
// }

export default function Answer({ answer }) {
  const {
    questions,
    currentQuestion,
    answers,
    setAnswers,
    setCurrentQuestion,
  } = useContext(quizContext);

  function handleAnswer(e) {
    const trueAnswer = questions[currentQuestion].correctAnswer;
    const currentAnswer = e.target.textContent;

    if (currentAnswer === trueAnswer) {
      e.target.classList.add("true");
    } else {
      e.target.classList.add("false");
    }

    setCurrentQuestion(currentQuestion + 1);
    if (currentAnswer === trueAnswer) {
      setAnswers([...answers, true]);
    } else {
      setAnswers([...answers, false]);
    }
  }

  function clearStyle(e) {
    e.target.classList.remove("true", "false");
  }

  return (
    <div className="answer" onClick={handleAnswer} onTransitionEnd={clearStyle}>
      {answer}
    </div>
  );
}
