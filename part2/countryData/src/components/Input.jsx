// eslint-disable-next-line react/prop-types
const Input = ({ value, handleChangeValue, type, placeholder }) => {
  return (
    <input
      style={input}
      type={type}
      value={value}
      onChange={handleChangeValue}
      placeholder={placeholder}
    />
  );
};
const input = {
  width: "auto",
  fontSize: 16,
  border: "1px solid black",
  borderRadius: 5,
  padding: 5,
};
export default Input;
