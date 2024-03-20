
import Header from "./header"
import Content from "./content";
import Total from "./Total";

const App = () => {
  const course = 'Desarrollo de aplicación Half  Stack';
  const part1 = 'Fundamentos de React'
  const excercises1 = 10
  const part2 = 'Usando props para pasar datos'
  const excercises2 = 7
  const part3 = 'Estado de un componente'
  const excercises3 = 14
  return(
    <>
      <Header course = {course}/>
      <Content 
      part1 = {part1}
      part2 = {part2}
      part3 = {part3}
      exercises1={excercises1}
      exercises2={excercises2}
      exercises3={excercises3}
      />
      <Total 
      resultado = {excercises1+excercises2+excercises3}    
      />
    </>
  )
}

export default App
