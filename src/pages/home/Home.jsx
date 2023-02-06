import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { PokemonCard } from "../../components/PokemonCard";
import { PokeInfo } from "../../components/PokemonModal";
import { Navbar } from "../../components/Navbar";
import { Skeletons } from "../../components/Skeletons";
import { usePokemon } from "../../context/context";
import { ButtonPaginationArrow } from "../../components/Button/ButtonArrow";
import { ButtonPaginationNumeric } from "../../components/Button/ButtonNumeric";

export const Home = () => {
  const { pokemons, selectPage, countPages } = usePokemon();
  let listPokemons = [];

  if (pokemons.length === 20) {
    listPokemons = pokemons;
  }

  return (
    <div>
      <Navbar />
      <Container maxWidth="false">
        {listPokemons.length === 0 ? (
          <Grid container>
            {Array.from({ length: 20 }, (_, index) => (
              <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
                <Skeletons />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={3}>
            {listPokemons.map((pokemon, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <PokemonCard pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>
        )}

        <Stack direction="row" margin={4} justifyContent="center" spacing={1}>
          <ButtonPaginationArrow
            text="<"
            hidden={false}
            currentPage={countPages}
            onClick={(e) => selectPage(e, countPages - 1)}
          />
          {Array.from({ length: 20 }, (_, index) => (
            <ButtonPaginationNumeric
              onClick={(e) => selectPage(e, index)}
              text={index + 1}
              key={index}
              currentPage={countPages}
            />
          ))}
          <ButtonPaginationArrow
            text=">"
            hidden={false}
            currentPage={countPages}
            onClick={(e) => selectPage(e, countPages)}
          />
        </Stack>

        <PokeInfo />
      </Container>
    </div>
  );
};
