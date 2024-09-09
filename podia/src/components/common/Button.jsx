import theme from "../../utils/theme";

const Button = (props) => {
  const { text, handleClick } = props;

  return (
    <button
      style={{
        border: "none",
        backgroundColor: theme.colors.darkPurple,
        padding: "1em 2em",
        fontSize: "0.8em",
        color: theme.colors.offWhite,
        borderRadius: "25px",
      }}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
};

export default Button;