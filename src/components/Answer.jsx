import "./Answer.css";
import { quizContext } from "./Quiz.jsx";
import { useContext } from "react";

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

    setCurrentQuestion(currentQuestion + 1);
    if (currentAnswer === trueAnswer) {
      setAnswers([...answers, true]);
    } else {
      setAnswers([...answers, false]);
    }
  }

  return (
    <div className="answer" onClick={handleAnswer}>
      {answer}
    </div>
  );
}
