import { useState } from "react";

//*FUNCIONES
function getRandomNumber(array){
  //random será un núm entre 0 y 1
  const random = Math.random()
  //tamaño, empezando por 1, del arr
  const lengthArr = array.length //reducimos en uno por los índices
  //Multiplicamos para aumentar el rango del número entero hastá la logitud del arr
  const multiplied = random * lengthArr
  //sacamos solo los números enteros desde 0 hasta la longitud del arr
  const result = Math.floor(multiplied)
  
  // Asegurar que el resultado esté dentro del rango válido de índices
  return result < lengthArr ? result : lengthArr - 1;
}


//*COMPONENTES
const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  
  const handleNextClick = () => {
    const randomNumber = getRandomNumber(anecdotes) 
    setSelected(randomNumber)
    console.log(randomNumber)
  }
  return (
    <>
      <p>
      {anecdotes[selected]}
      </p>
      <Button handleClick={handleNextClick} text='Next anecdote'/>
    </>
  )
};
export default App;
