
import Header from "./header"
import Content from "./content";
import Total from "./Total";

const App = () => {
  const course = 'Half Stack application developent'
  const parts = [
    {
      name : 'Fundamentals of React',
      exercises : 10
    },
    {
      name : 'Using props to pass data',
      exercises : 7
    },
    {
      name : 'State of a component',
      exercises : 14
    }
  ]

  return(
    <>
      <Header course = {course}/>
      
      <Content objeto_contenido={parts} />

      <Total objeto_contenido_total={parts} />
      
    </>
  )
}

export default App
