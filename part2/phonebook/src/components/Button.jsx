const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "red", color: "white", marginLeft: "10px" }}
    >
      {text}
    </button>
  );
};

export default Button;
