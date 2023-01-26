import "./index.css";

export const ButtonPagination = ({ onClick, text, hidden }) => {
  return (
    <button hidden={hidden} onClick={onClick} className="ButtonPagination">
      {text}
    </button>
  );
};
