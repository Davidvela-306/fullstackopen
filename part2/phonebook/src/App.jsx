import { useState } from "react";

const Note = (props) => {
  console.log(
    "%cpart2phonebooksrcApp.jsx:4 props Note",
    "color: #007acc;",
    props.person
  );
  return <p>{props.person.name}</p>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");

  const handleChangeKeyword = (event) => {
    console.log("teclado: ", event.target.value);
    setNewName(event.target.value);
  };
  const addNote = (event) => {
    event.preventDefault();
    console.log("botón: ", event.target);
    const newObj = {
      name: newName,
      id: persons.length + 1,
    };
    setPersons(persons.concat(newObj));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleChangeKeyword} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Note key={person.id} person={person} />
      ))}
    </div>
  );
};

export default App;
