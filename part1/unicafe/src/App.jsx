import { useState } from 'react'

const Button = (props) =>{
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [averange, setAverange] = useState(0)
  const [positivePercent, setPositivePercent] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
    setAll(all+1)
    const goodVar = good+1
    const allVar = all+1
    setAverange((goodVar*1 + neutral*0 + bad*-1)/allVar)
    setPositivePercent((goodVar/allVar)*100)
    
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    const neutralVar = neutral+1
    const allVar = all+1
    setAverange((good*1 + neutralVar*0 + bad*-1)/allVar)
    setPositivePercent((good/allVar)*100)

  }
  const handleBadClick = () => {
    setBad(bad+1)
    setAll(all+1)
    const badVar = bad+1
    const allVar = all+1
    setAverange((good*1 + neutral*0 + badVar*-1)/allVar)
    setPositivePercent((good/allVar)*100)
    
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text={'good'}/>
      <Button handleClick={handleNeutralClick} text={'neutral'}/>
      <Button handleClick={handleBadClick} text={'bad'}/>
      <h1>statics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {all}</p>
      <p>averange: {averange}</p>
      <p>positive: {positivePercent}%</p>
      
    </>
  )
}

export default App