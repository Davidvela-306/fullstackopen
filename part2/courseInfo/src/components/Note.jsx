const Note = ({ note }) => {
  return <li>{note.name}  {note.exercises}</li>;
};

export default Note;