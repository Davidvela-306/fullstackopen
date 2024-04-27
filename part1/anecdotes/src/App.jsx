import { useState } from "react";

//*FUNCIONES
function getRandomNumber(array) {
  //random será un núm entre 0 y 1
  const random = Math.random();
  //tamaño, empezando por 1, del arrVotes
  const lengthArr = array.length; //reducimos en uno por los índices
  //Multiplicamos para aumentar el rango del número entero hastá la logitud del arrVotes
  const multiplied = random * lengthArr;
  //sacamos solo los números enteros desde 0 hasta la longitud del arrVotes
  const result = Math.floor(multiplied);

  // Asegurar que el resultado esté dentro del rango válido de índices
  return result < lengthArr ? result : lengthArr - 1;
}
//crear un arrVotes lleno de 0, de longitud acorde a otro arrVotes como parámetro
function getVote(array) {
  const lengthArr = array.length;
  let newVotesArr = new Array(lengthArr);
  return newVotesArr.fill(0);
}
function getIndexMaxVote(arrVotes) {
  const mayor = Math.max(...arrVotes); // Obtiene el valor máximo del array
  const index = arrVotes.indexOf(mayor); // Obtiene el índice del valor máximo
  return index;
}

//*COMPONENTES
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const MostVoted = ({ arrVotes, arrAnecdotes }) => {
  const maxValIndex = getIndexMaxVote(arrVotes);
  return (
    <>
      <p>{arrAnecdotes[maxValIndex]}</p>
      <p>votos: {arrVotes[maxValIndex]}</p>
    </>
  );
};

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
    "Soy nuevo xd",
  ];

  //* ESTADOS
  const [selected, setSelected] = useState(0); //elegir anecdota aleatoria
  let arrVotes = getVote(anecdotes);
  const [votes, setVotes] = useState(arrVotes); //votos para cada a necdota
  const [feedBack, setFeedBack] = useState(false); //condicional para mostrar más votada

  const handleNextClick = () => {
    const randomNumber = getRandomNumber(anecdotes);
    setSelected(randomNumber);
  };
  const handleVoteClick = () => {
    const copyVotes = [...votes];
    copyVotes[selected] = copyVotes[selected] + 1;
    setVotes(copyVotes);
    setFeedBack(true);
  };
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleNextClick} text="Next anecdote" />
      {feedBack ? (
        <>
          <h1>Anecdote with most votes</h1>
          <MostVoted arrVotes={votes} arrAnecdotes={anecdotes} />
        </>
      ) : (
        <>
          <h1>Dont exist votes</h1>
        </>
      )}
    </>
  );
};
export default App;
