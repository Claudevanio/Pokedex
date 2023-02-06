import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { usePokemon } from "../../context/context";
import { colorByType, getImageURL } from "../../utils";
import { PillPokemonType } from "../PillPokemonType";

export const PokemonCard = ({ pokemon, image }) => {
  const { handleOpen } = usePokemon();

  if (!pokemon) return;
  let isLoading = true;
  const bgColorType = colorByType(pokemon.types[0].type.name);
  const imagePoke = getImageURL(pokemon.id);
  isLoading = false;

  const handleModal = () => handleOpen({ pokemon: pokemon });

  return (
    <Card
      sx={{
        height: "22em",
        maxWidth: 345,
        minHeight: 250,
        bgcolor: bgColorType,
        borderRadius: "24px",
        boxShadow: 11,
      }}
      onClick={handleModal}
    >
      <CardActionArea>
        {isLoading ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="18em"
          >
            <CircularProgress />
          </Box>
        ) : (
          <Box height="18em">
            <CardMedia
              component="img"
              image={imagePoke}
              height="100%"
              alt="pokemon image"
            />
          </Box>
        )}

        <CardContent>
          <Box color={"white"}>
            #{pokemon.id}
            <Typography gutterBottom variant="h5">
              {pokemon.name}
            </Typography>
          </Box>
          <div>
            {pokemon.types.map((item, index) => (
              <PillPokemonType
                key={index}
                typeName={item.type.name}
              ></PillPokemonType>
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
