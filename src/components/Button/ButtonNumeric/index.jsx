import { usePokemon } from "../../../context/context";
import "./index.css";

export const ButtonPaginationNumeric = ({ onClick, text, currentPage }) => {
  const { shouldShowButton } = usePokemon();

  let isCurrentPage = null;
  const isHidden = shouldShowButton(currentPage, text);

  if (currentPage === text) {
    isCurrentPage = "blue";
  }

  return (
    <button
      hidden={isHidden}
      style={{ backgroundColor: isCurrentPage }}
      onClick={onClick}
      className="ButtonPaginationNumeric"
    >
      {text}
    </button>
  );
};
