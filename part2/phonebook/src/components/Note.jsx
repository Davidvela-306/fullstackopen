const Note = (props) => {
  console.log(
    "%cpart2phonebooksrcApp.jsx:4 props Note",
    "color: #007acc;",
    props.person
  );
  return <p>{props.person.name} {props.person.number}</p>;
};

export default Note;