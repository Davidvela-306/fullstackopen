import Note from "./Note";

const Course = (props) => {
  const { course } = props;

  const sumExercises = course.parts.reduce(
    (pre, act) => pre + act.exercises,
    0
  );

  return (
    <>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <p>total of {sumExercises} exercises</p>
    </>
  );
};

export default Course;
