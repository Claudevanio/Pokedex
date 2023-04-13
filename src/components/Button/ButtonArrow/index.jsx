import { usePokemon } from "../../../context/context";
import "./index.css";

export const ButtonPaginationArrow = ({ onClick, text, currentPage, hidden }) => {

  const {nextPreviousPage} = usePokemon();

  const {next, previous} = nextPreviousPage;

  let isCurrentPage = null;

  if (currentPage === text) {
    isCurrentPage = "blue";
  }

  if (currentPage === 1 && text === '<') hidden = true
  if (currentPage === 20 && text === '>') hidden = true

  if (next == null && text === '>') hidden = true
  if (previous == null && text === '<') hidden = true

  

  return (
    <button
      hidden={hidden}
      style={{ backgroundColor: isCurrentPage }}
      onClick={onClick}
      className="ButtonPaginationArrow"
    >
      {text}
    </button>
  );
};
