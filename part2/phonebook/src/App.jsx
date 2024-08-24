import { useState, useEffect } from "react";
import personsService from "./services/persons";
import Form from "./components/FilterForm";
import AddPersonForm from "./components/AddPersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [render, setRender] = useState(false);
  const [allPersons, setAllPersons] = useState([]);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchPersons, setSearchPerson] = useState("");

  const getAllPersons = () => {
    personsService.getAll().then((persons) => {
      setPersons(persons);
      setAllPersons(persons);
    });
  };
  useEffect(getAllPersons, [render]);

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
    console.log("persons: ", persons);
  };

  const handleSumbmitAddNote = (event) => {
    event.preventDefault();
    const finded = allPersons.find(
      (person) =>
        person.name === newName.trim() || person.number === newNumber.trim()
    );

    let newObj = {
      name: newName.trim(),
      number: newNumber.trim(),
    };

    if (finded) {
      const { id } = finded;
      if (
        window.confirm(
          `The name ${newName} already exist in your contacts, do you want to replace it?`
        )
      ) {
        personsService
          .update(id, { id, ...newObj })
          .then(
            setAllPersons(
              allPersons.map((person) =>
                person.name === newName ? newObj : person
              )
            ),
            setPersons(
              allPersons.map((person) =>
                person.name === newName ? newObj : person
              )
            )
          )
          .catch((err) => console.error(err));
      }
    } else {
      // Dado que id se establece en el server y se lo obtiene en un nuevo render, se opta por crear este artificio setRender
      personsService.create(newObj).then(setRender(!render));
    }
    setNewName("");
    setNewNumber("");
  };
  const deletePerson = (id, name) => {
    if (window.confirm(`Do you really want to delete: ${name}?`)) {
      personsService
        .remove(id)
        .then(() => {
          setAllPersons(allPersons.filter((person) => person.id !== id));
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
      <Persons persons={persons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
