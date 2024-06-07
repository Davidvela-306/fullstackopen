const Form = (props) => {
  return (
    <>
      <form>
        {/* Se maneja el valor del input con un state u un controlador de eventos */}
        <div>
          Filtro por nombre:{" "}
          <input
            value={props.searchPersons}
            onChange={props.handleChangePerson}
          />
        </div>
        <br />
      </form>
    </>
  );
};

export default Form