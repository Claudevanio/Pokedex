import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { usePokemon } from "../../context/context";
import { Stack } from "@mui/system";
import { CircularProgress, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { colorByType, getImageDetailsURL } from "../../utils";
import { PillPokemonType } from "../PillPokemonType";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 8,
  boxShadow: 24,
};

const styleStats = {
  position: "relative",
  border: "2px solid",
  p: "1em",
  width: "full",
  height: "100",
  borderRadius: 8,
  bgcolor: "background.paper",
};

export const PokeInfo = () => {
  const { modalState, handleClose } = usePokemon();
  const { pokemon, visible } = modalState;

  if (!pokemon) return;
  let isLoading = true;

  const { name, id, stats } = pokemon;

  const bgColorType = colorByType(pokemon.types[0].type.name);
  const imagePoke = getImageDetailsURL(id);
  isLoading = false;
  return (
    <div className="modal">
      <Modal
        open={visible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal} bgcolor={bgColorType}>
          <IconButton
            onClick={handleClose}
            m={5}
            sx={{
              position: "absolute",
              top: "2%",
              left: "2%",
              color: "white",
            }}
            aria-label="back"
          >
            {" "}
            <ArrowBack />{" "}
          </IconButton>
          <Stack alignItems="center" color="white">
            <h1>{name}</h1>
          </Stack>
          <Stack position={"relative"} zIndex={1} marginBottom={-3}>
            <Stack position={"absolute"} left="4%">
              {pokemon.types.map((item, index) => (
                <PillPokemonType
                  key={index}
                  typeName={item.type.name}
                ></PillPokemonType>
              ))}
            </Stack>
            {isLoading ? (
              <Box
                height="200px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress />
              </Box>
            ) : (
              <img src={imagePoke} height="200" alt="pokemonimg" />
            )}
          </Stack>

          <Box sx={styleStats}>
            {stats.map((item, index) => (
              <p key={index}>
                {item.stat.name}: {item.base_stat}
              </p>
            ))}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
