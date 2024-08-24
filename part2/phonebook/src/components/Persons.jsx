import Note from "../components/Note";
import Button from "./Button";

const Persons = ({ persons, deletePerson }) => {
  return (
    <>
      {persons.map((person) => (
        <div key={person.id} style={{ display: "flex" }}>
          <Note person={person} />
          <Button
            text="delete"
            onClick={() => deletePerson(person.id, person.name)}
          />
        </div>
      ))}
    </>
  );
};

export default Persons;
