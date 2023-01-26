import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { PokemonCard } from "../../components/PokemonCard";
import { PokeInfo } from "../../components/PokemonModal";
import { Navbar } from "../../components/Navbar";
import { Skeletons } from "../../components/Skeletons";
import { usePokemon } from "../../context/context";
import { ButtonPagination } from "../../components/Button";

export const Home = () => {
  const { pokemons, loading, nextPage, prevPage, prevUrl } = usePokemon();

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        {loading ? (
          <Skeletons />
        ) : (
          <Grid container spacing={3}>
            {pokemons.map((pokemon, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <PokemonCard pokemon={pokemon} loading={loading} />
              </Grid>
            ))}
          </Grid>
        )}
        <Stack direction="row" margin={4} justifyContent="center" spacing={1}>
          <ButtonPagination
            onClick={(e) => prevPage(e)}
            hidden={prevUrl === null ? true : false}
            text="Previous"
          />
          <ButtonPagination text="Next" onClick={(e) => nextPage(e)} />
        </Stack>
        <PokeInfo />
      </Container>
    </div>
  );
};
