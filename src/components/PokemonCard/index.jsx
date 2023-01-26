import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import { usePokemon } from "../../context/context";
import { colorByType, getImageURL } from "../../utils";
import { PillPokemonType } from "../PillPokemonType";

export const PokemonCard = ({ pokemon, image }) => {
  const { handleOpen } = usePokemon();

  if (!pokemon) return;

  const bgColorType = colorByType(pokemon.types[0].type.name);

  const handleModal = () => handleOpen({ pokemon: pokemon });

  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 350,
        bgcolor: bgColorType,
        borderRadius: "24px",
      }}
      onClick={handleModal}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={getImageURL(pokemon.id)}
          height="100%"
          alt="pokemon image"
        />
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
