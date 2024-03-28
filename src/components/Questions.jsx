import "./Questions.css";
import Answer from "./Answer.jsx";
import { quizContext } from "./Quiz.jsx";
import { useContext } from "react";

function AnswersList({ correctAnswer, incorrectAnswers }) {
  const maxAnswers = 2;
  const newAnswers = [
    correctAnswer,
    ...incorrectAnswers.slice(0, maxAnswers - 1),
  ].sort(() => Math.random() - 0.5);
  const answersList = newAnswers.map((answer, index) => {
    return <Answer answer={answer} key={index} />;
  });

  return answersList;
}

export default function Questions() {
  const { questions, currentQuestion } = useContext(quizContext);
  const quizQuestion = questions[currentQuestion];

  return (
    <div>
      <div className="question">{quizQuestion.question.text}</div>
      <div className="answers">
        <AnswersList
          correctAnswer={quizQuestion.correctAnswer}
          incorrectAnswers={quizQuestion.incorrectAnswers}
        />
      </div>
    </div>
  );
}
