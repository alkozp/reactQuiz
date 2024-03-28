import { useState, useEffect, useRef } from "react";
import "./AppQuiz.css";
import Quiz from "./components/Quiz.jsx";
import quizData from "./assets/questions.json";
import Result from "./components/Result.jsx";

export default function AppQuiz() {
  const [questions, setQuestions] = useState(quizData);
  const [result, setResult] = useState({ status: false, answersList: [] });

  // useEffect(() => {
  //   fetch("./questions.json")
  //     .then((response) => json(response))
  //     .then((data) => setQuestions(data))
  //     .catch((error) => console.error(error));
  // });

  return (
    <>
      <div className="app-quiz">
        <h1>React quiz</h1>
        {!result.status && (
          <Quiz questions={questions} setResult={setResult} result={result} />
        )}
        {result.status && <Result results={result} />}
      </div>
    </>
  );
}
