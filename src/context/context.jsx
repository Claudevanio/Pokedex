import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

export const PokemonContext = createContext({});

export const usePokemon = () => useContext(PokemonContext);

export function PokemonContextProvider({ children }) {
  const [modalState, setmodalState] = useState({ visible: false });
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const handleOpenModal = (payload) =>
    setmodalState({ ...payload, visible: true });

  const handleCloseModal = () => setmodalState({ visible: false });

  const fetchAllPokemons = async (url) => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
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

  const nextPage = (e) => {
    e.preventDefault();
    setPokemons([]);
    setUrl(nextUrl);
    return;
  };

  const prevPage = (e) => {
    e.preventDefault();
    setPokemons([]);
    setUrl(prevUrl);
    return;
  };

  useEffect(() => {
    if (!url) return;

    fetchAllPokemons(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <PokemonContext.Provider
      value={{
        modalState,
        pokemons,
        loading,
        prevUrl,
        nextPage,
        prevPage,
        handleClose: handleCloseModal,
        handleOpen: handleOpenModal,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
