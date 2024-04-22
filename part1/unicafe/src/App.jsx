import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

// un lugar adecuado para definir un componente
const Statistics = (props) => {
  console.log(props);
  return (
    <p>
      {props.text}: {props.statistic}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleGoodClick = () => {
    setGood(good + 1);
    setFeedbackGiven(true);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setFeedbackGiven(true);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    setFeedbackGiven(true);
  };
  const total = good + bad + neutral;
  const positivePercent = total === 0 ? 0 : (good / total) * 100;
  const average = total === 0 ? 0 : (good - bad) / total;

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text={"good"} />
      <Button handleClick={handleNeutralClick} text={"neutral"} />
      <Button handleClick={handleBadClick} text={"bad"} />
      {feedbackGiven ? (
        <>
          <h1>statics</h1>
          <Statistics statistic={good} text={"good"} total={total} />
          <Statistics statistic={neutral} text={"neutral"} total={total} />
          <Statistics statistic={bad} text={"bad"} total={total} />
          <Statistics statistic={total} text={"all"} total={total} />
          <Statistics statistic={average} text={"average"} total={total} />
          <Statistics statistic={positivePercent} text={"positivePercent"} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default App;
