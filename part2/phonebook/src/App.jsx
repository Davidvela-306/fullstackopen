import { useState } from "react";
import Form from "./components/FilterForm";
import AddPersonForm from "./components/AddPersonForm";
import Persons from "./components/Persons";

// export default Persons;

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
    const filteredPersons = allPersons.filter(
      (person) => person.name.toLowerCase().includes(searchTerm) //todas las que incluyan el seacTerm
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
      <Form
        searchPersons={searchPersons}
        handleChangePerson={handleChangePerson}
      />
      <AddPersonForm
        handleSumbmitAddNote={handleSumbmitAddNote}
        newName={newName}
        handleChangeName={handleChangeName}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
