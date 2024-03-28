import "./Quiz.css";
import Questions from "./Questions.jsx";
import Statistics from "./Statistics.jsx";
import React from "react";
import { useState, useEffect } from "react";
// import { useContext } from "react";

export const quizContext = React.createContext();

export default function Quiz({ questions, setResult, result }) {
  //   console.log(questions);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  if (answers.length === questions.length) {
    setResult({ status: true, answersList: answers });
    return null;
  }

  return (
    <>
      <quizContext.Provider
        value={{
          answers,
          setAnswers,
          questions,
          currentQuestion,
          setCurrentQuestion,
        }}
      >
        <Questions />
        <Statistics />
      </quizContext.Provider>
    </>
  );
}
