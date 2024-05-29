import { useState } from "react";
import Note from "./components/Note"


const App = () => {
  const [persons, setPersons] = useState([{ id: 1, name: "Arto Hellas", number: "123456" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleChangeName = (event) => {
    console.log("teclado: ", event.target.value);
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    console.log("teclado: ", event.target.value);
    setNewNumber(event.target.value);
  };
  const addNote = (event) => {
    event.preventDefault();
    console.log("botón: ", event.target);
    const finded = persons.find((person) => person.name === newName.trim() || person.number === newNumber.trim());
    console.log(
      "%cpart2phonebooksrcApp.jsx:24 finded",
      "color: #26bfa5;",
      finded
    );
    let newObj = { id: persons.length + 1, name: newName.trim(), number: newNumber.trim() };
    finded != undefined
      ? alert(`The name ${newName} or the phone number ${newNumber} is already added to phonebook`)
      : setPersons(persons.concat(newObj));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNumber} />
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
