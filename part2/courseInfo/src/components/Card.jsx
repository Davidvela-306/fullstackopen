import Note from "./Note";

const Card = (data) => {
  const sumTotal = data.props.parts.reduce(
    (pre, act) => pre + act.exercises,
    0
  );
  return (
    <>
      <h2>{data.props.name}</h2>
      <ul>
        {data.props.parts.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      Total of {sumTotal} exercises
    </>
  );
};

export default Card;
