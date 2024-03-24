
import Header from "./header"
import Content from "./content";
import Total from "./Total";

const App = () => {
  const course = 'Half Stack application developent'
  const part1 = {
    name : 'Fundamentals of React',
    excercises : 10
  }
  const part2 = {
    name : 'Using props to pass data',
    excercises : 17
  }
  const part3 = {
    name : 'State of a component',
    excercises : 14
  }

  return(
    <>
      <Header course = {course}/>
      <Content 
      part1 = {part1.name}
      exercises1 = {part1.excercises}
      
      part2= {part2.name}
      exercises2={part2.excercises}

      part3= {part3.name}
      exercises3={part3.excercises} 
      />
      <Total 
      resultado = {part1.excercises + part2.excercises + part3.excercises}
      />
      
    </>
  )
}

export default App
