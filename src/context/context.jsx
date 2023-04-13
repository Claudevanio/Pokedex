import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

export const PokemonContext = createContext({});

export const usePokemon = () => useContext(PokemonContext);

export function PokemonContextProvider({ children }) {
  const [modalState, setmodalState] = useState({ visible: false });
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://localhost:7066/pokemon/");
  const [countPages, setCountPages] = useState(1);
  const [nextPreviousPage, setNextPreviousPage] = useState({next: -1, previous: -1});

  const handleOpenModal = (payload) =>
    setmodalState({ ...payload, visible: true });

  const handleCloseModal = () => setmodalState({ visible: false });

  const fetchAllPokemons = async (url) => {
    setLoading(true);
    const res = await axios.get(url);
    setNextPreviousPage({next: res.data.next, previous: res.data.previous})
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemons((datas) => {
        datas = [...datas, result.data];
        datas.sort((a, b) => (a.id > b.id ? 1 : -1));
        return datas;
      });
    });
  };

  const selectPage = (e, index) => {
    e.preventDefault();

    if (index === countPages - 1) {
      window.scrollTo(0, 0);
      return;
    }

    const urlPagination = `https://localhost:7066/pokemon/?limit=20&offset=${
      20 * index
    }`;
    setPokemons([]);
    setUrl(urlPagination);
    setCountPages(index + 1);
    console.log(`${countPages} Estou aqui`);
  };

  const shouldShowButton = (currentButton = 1, buttonIndex) => {
    let buttonsPerPage = 10;
    
    const startIndex = currentButton - Math.floor(buttonsPerPage / 2);
    const endIndex = startIndex + buttonsPerPage;
    
    if (buttonIndex > currentButton && nextPreviousPage.next == null) {return true;}

    if (
      currentButton >= 1 &&
      currentButton <= 5 &&
      buttonIndex >= 5 &&
      buttonIndex < 11
    ) {
      return false;
    }

    if (
      currentButton >= 16 &&
      currentButton <= 20 &&
      buttonIndex >= 11 &&
      buttonIndex < 20
    ) {
      return false;
    }

    
    if (buttonIndex >= startIndex && buttonIndex < endIndex) {
      return false;
    } else if (true) {
      return true;
    }
    
  };

  useEffect(() => {
    if (!url) return;

    fetchAllPokemons(url);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <PokemonContext.Provider
      value={{
        modalState,
        pokemons,
        loading,
        countPages,
        nextPreviousPage,
        handleClose: handleCloseModal,
        handleOpen: handleOpenModal,
        selectPage,
        shouldShowButton,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
