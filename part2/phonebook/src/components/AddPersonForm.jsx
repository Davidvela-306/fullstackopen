const AddPersonForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSumbmitAddNote}>
        <div>
          name:{" "}
          <input value={props.newName} onChange={props.handleChangeName} />
        </div>
        <div>
          number:{" "}
          <input value={props.newNumber} onChange={props.handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default AddPersonForm