import Input from "./Input";

// eslint-disable-next-line react/prop-types
const SearchForm = ({ text, searchValue, handleChangeValue }) => {
  return (
    <form style={searchItem} onSubmit={(e) => e.preventDefault()}>
      <p style={textItem}>{text}</p>
      <Input
        type="search"
        value={searchValue}
        handleChangeValue={handleChangeValue}
        placeholder="Search for a country..."
      />
    </form>
  );
};

const searchItem = {
  paddingTop: 10,
  paddingBottom: 10,
  display: "flex",
  flex: 1,
  gap: 20,
  alignItems: "center",
};
const textItem = {
  fontSize: 15,
};

export default SearchForm;
