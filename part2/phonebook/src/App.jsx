import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/FilterForm";
import AddPersonForm from "./components/AddPersonForm";
import Persons from "./components/Persons";

// export default Persons;

const App = () => {
  const [allPersons, setAllPersons] = useState([]);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchPersons, setSearchPerson] = useState("");

  const getAllPersons = () => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
      setAllPersons(res.data);
    });
  };
  useEffect(getAllPersons, []);

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
