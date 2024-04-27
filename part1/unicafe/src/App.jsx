import { useState } from "react";
/*eslint-disable*/
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
const StaticLine = (props) => {
  if (props.text==='positive'){
    return (
      <tr>
        <td>
        {props.text}: {props.value} %
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>
      {props.text}: {props.value}
      </td>
    </tr>
  );
};
const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <StaticLine text="good" value={props.goodVar} />
        <StaticLine text="neutral" value={props.neutralVar} />
        <StaticLine text="bad" value={props.badVar} />
        <StaticLine text="total" value={props.totalVar} />
        <StaticLine text="average" value={props.averageVar} />
        <StaticLine text="positive" value={props.positivePercentVar} />
      </tbody>
    </table>
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
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text={"bad"} />
      {feedbackGiven ? (
        <>
          <h1>statics</h1>
          <Statistics
            goodVar={good}
            neutralVar={neutral}
            badVar={bad}
            totalVar={total}
            averageVar={average}
            positivePercentVar={positivePercent}
          />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default App;
