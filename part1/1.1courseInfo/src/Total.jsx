const total = (props) => {
    const [first, second, third] = props.objeto_contenido_total.parts
    return(
        <>
            <p>
                Numero de ejercicios: {first.exercises + second.exercises + third.exercises}
            </p>
        </>
    )
}

export default total