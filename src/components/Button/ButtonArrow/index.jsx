import "./index.css";

export const ButtonPaginationArrow = ({ onClick, text, currentPage, hidden }) => {

  let isCurrentPage = null;

  if (currentPage === text) {
    isCurrentPage = "blue";
  }

  if (currentPage === 1 && text === '<') hidden = true
  if (currentPage === 20 && text === '>') hidden = true

  

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
