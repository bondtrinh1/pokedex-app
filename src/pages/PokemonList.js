import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { 
  Grid, 
  CircularProgress, 
  Typography,
  Card,
  CardContent,
  CardMedia,
  Alert,
  Box
} from "@mui/material";
import axios from "axios";

function PokemonList() {
  const getPokemons = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150"
    );
    return data;
  };

  const getPokemonByURL = async (url) => {
    const { data } = await axios.get(url);
    return data;
  };

  useEffect(() => {
    document.title = "Pokémons | Pokédex";
  });

  const PokemonCard = ({ name, url }) => {
      const { error, isFetching, data } = useQuery(`pokemon${name}`, () =>
        getPokemonByURL(url), {
          refetchOnMount: false,
          refetchOnWindowFocus: false,
        }
      );
    
      if (error) {
        return <Alert severity="error">{error.message}</Alert>
      }
    
      if (isFetching) {
        return (
          <Box sx={{ 
            position: "absolute", 
            top: "50%", 
            left: "50%"
          }}
          >
            <CircularProgress />
          </Box>
        );
      }
    
      const {
        sprites: { front_default }
      } = data;
    
      return (
        <Link to={`/pokemon/${name}`} style={{ textDecoration: "none" }}>
          <Card>
            <CardMedia
              component="img"
              image={front_default}
              alt={name}
            />
            <CardContent>
              <Typography sx={{
                textTransform: "capitalize",
                textAlign: "center"
              }}
              >
                {name}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      );
  };

  const { error, isFetching, data } = useQuery("pokemons", getPokemons, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
  
  if (error) {
    return <Alert severity="error">{error.message}</Alert>
  }
  
  if (isFetching) {
    return (
      <Box sx={{ 
        position: "absolute", 
        top: "50%", 
        left: "50%"
      }}
      >
        <CircularProgress />
      </Box>
    );
  };
  
  const { results: pokemons } = data;

  return (
    <Grid 
      container spacing={2} 
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 200px)",
        justifyContent: "center",
        paddingBottom: 4
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