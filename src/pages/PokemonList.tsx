import { useEffect } from "react";
import { useQuery } from "react-query";
import { Grid, CircularProgress, Alert, Box } from "@mui/material";
import { PokemonCard } from "../components";
import { getPokemons } from "../utils";

function PokemonList() {
  useEffect(() => {
    document.title = "Pokémons | Pokédex";
  });

  const { error, isFetching, data } = useQuery("pokemons", getPokemons, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (error) {
    // return <Alert severity="error">{error.message}</Alert>;
    return <Alert severity="error">Something went wrong...</Alert>;
  }

  if (isFetching) {
    return (
      <Box
        sx={{
          alignContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const { results: pokemons } = data;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 200px)",
        justifyContent: "center",
        marginTop: 0,
        paddingBottom: 2,
      }}
    >
      {pokemons?.map((pokemon, index) => (
        <Grid item key={index}>
          <PokemonCard {...pokemon} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PokemonList;
