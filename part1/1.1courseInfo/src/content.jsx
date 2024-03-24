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
    return(
        <>
            <Part part = {props.part1} exercises = {props.exercises1}/>
            <Part part = {props.part2} exercises = {props.exercises2}/>
            <Part part = {props.part3} exercises = {props.exercises3}/>
            {/* El error se encuentra en exercisises, ya que el valor es undefined */}
        </>
    )
}

export default Content;