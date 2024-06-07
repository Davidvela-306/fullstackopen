import Note from "../components/Note";

const Persons = ({ persons }) => {
  return (
    <>
      {/* Se muestra person, su estado inicial === All persons, con filtro va cambiando hasta que se añada nueva nota y se muestre todo el contenido */}
      {persons.map((person) => (
        <Note key={person.id} person={person} />
      ))}
    </>
  );
};

export default Persons;
