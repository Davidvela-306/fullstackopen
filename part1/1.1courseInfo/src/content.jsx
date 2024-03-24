const Part = (props) => {
    console.log("Part: ",props);  
    return(
        <>
            <p>
                {props.part} {props.exercises}
            </p>
        </>
    )
}

const Content = (props) => {  
    console.log("Content: ",props);
    //Destructurar  props-- props.objeto_contenido es un array, a su vez contiene el arr parts que contiene objetos(name,exercises)
    const [first, second, third] = props.objeto_contenido.parts ;  //destructuring assignment
    //first = {name: "Fundamentals of React", exercises: 10}

    console.log("First.name: ", first.name)
    console.log("First.exercises: ", first.exercises)

    return(
        <>
            <Part part = {first.name} exercises = {first.exercises}/>
            <Part part = {second.name} exercises = {second.exercises}/>
            <Part part = {third.name} exercises = {third.exercises}/>
        </>
    )
}

export default Content;