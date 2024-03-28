import "./Result.css";
export default function Result({ results }) {
  const total = results.answersList.length;
  const rightAnswers = results.answersList.filter((answer) => answer).length;
  const percents = Math.round((rightAnswers / total) * 100);

  function handlingStartAgain() {
    window.location.reload();
  }

  return (
    <div>
      <div className="header-score">Your results:</div>
      <div className="score">
        {rightAnswers} from {total}
      </div>
      <div className="percents">{percents}%</div>
      <div>
        <button onClick={handlingStartAgain}>Start again</button>
      </div>
    </div>
  );
}
