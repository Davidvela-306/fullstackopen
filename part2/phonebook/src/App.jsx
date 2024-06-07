import { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [allPersons, setAllPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [persons, setPersons] = useState(allPersons); //Se crea una copia para que persistan los datos
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchPersons, setSearchPerson] = useState("");

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleChangePerson = (event) => {
    const searchTerm = event.target.value.toLowerCase(); //insensible a mayusculas o minusculas
    setSearchPerson(searchTerm); //usamos searchTerm y no searchPerson, xq estamos dentro del controlador por lo que el val del 2do es uno menor al real

    //TODO Filtro por nombres
    const filteredPersons = allPersons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm) //todas las que incluyan el seacTerm
    );
    console.log("filteredPersons: ", filteredPersons);
    setPersons(filteredPersons); //Persons == filteredPersons
  };

  const handleSumbmitAddNote = (event) => {
    event.preventDefault();
    const finded = allPersons.find(
      (person) =>
        person.name === newName.trim() || person.number === newNumber.trim()
    );
    let newObj = {
      id: allPersons.length + 1,
      name: newName.trim(),
      number: newNumber.trim(),
    };
    if (finded) {
      alert(
        `The name ${newName} or the phone number ${newNumber} is already added to phonebook`
      );
    } else {
      const updatedPersons = allPersons.concat(newObj);
      setAllPersons(updatedPersons); //se añade a AllPersons
      setPersons(updatedPersons); //como es una copia, tambien en persons
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        {/* Se maneja el valor del input con un state u un controlador de eventos */}
        <div>
          Filtro por nombre:{" "}
          <input value={searchPersons} onChange={handleChangePerson} />
        </div>
        <br />
      </form>
      <form onSubmit={handleSumbmitAddNote}>
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
      {/* Se muestra person, su estado inicial === All persons, con filtro va cambiando hasta que se añada nueva nota y se muestre todo el contenido */}
      {persons.map((person) => (
        <Note key={person.id} person={person} />
      ))}
    </div>
  );
};

export default App;
