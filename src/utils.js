export const getImageURL = (pokemonId) => {
  const baseURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  return `${baseURL}/${pokemonId}.png`;
};

export const getImageDetailsURL = (pokemonId) => {
  const baseURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other";

  // PNG.
  if (parseInt(pokemonId) >= 650) {
    return `${baseURL}/official-artwork/${pokemonId}.png`;
  }

  // SVG.
  return `${baseURL}/dream-world/${pokemonId}.svg`;
};

export const colorByType = (type) => {
  switch (type) {
    case "normal":
      return "#C2C2A1";

    case "flying":
      return "#BAB0D5";

    case "ghost":
      return "#735797";

    case "dark":
      return "#333";

    case "steel":
      return "#CCCCDE";

    case "ground":
      return "#B1736C";

    case "poison":
      return "#7C538C";

    case "grass":
      return "#48D0B0";

    case "fire":
      return "#FB6C6C";

    case "electric":
      return "#FFD86F";

    case "fairy":
      return "#f469a9";

    case "bug":
      return "#C3CE75";

    case "fighting":
      return "#d6b591";

    case "water":
      return "#609FB5";

    case "psychic":
      return "#9B7FA6";

    case "ice":
      return "#7FCCEC";

    case "rock":
      return "#a6aab6";

    case "dragon":
      return "#F9BE00";

    default:
      break;
  }
};
