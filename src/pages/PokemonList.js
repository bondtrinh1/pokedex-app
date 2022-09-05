import React from "react";
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

  const PokemonCard = ({ name, url }) => {
      const { error, isFetching, data } = useQuery(`pokemon${name}`, () =>
        getPokemonByURL(url)
      );
    
      if (error) {
        return <Alert severity="error">{error.message}</Alert>;
      }
    
      if (isFetching) {
        return (
          <Box sx={{ 
            position: "absolute", 
            top: "50%", 
            left: "50%" 
          }}>
            <CircularProgress />
          </Box>
        );
      }
    
      const {
        sprites: { front_default }
      } = data;
    
      return (
        <Link to={`/pokemon/${name}`} style={{ textDecoration: "none" }}>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              component="img"
              height="120"
              image={front_default}
              alt={name}
            />
            <CardContent>
              <Typography sx={{
                textTransform: "capitalize",
                textAlign: "center",
              }}>
                {name}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      );
  };

  const { error, isFetching, data } = useQuery("pokemons", getPokemons);
  
  if (error) {
    return <Alert severity="error">{error.message}</Alert>
  }
  
  if (isFetching) {
    return (
      <Box sx={{ 
        position: "absolute", 
        top: "50%", 
        left: "50%" 
      }}>
        <CircularProgress />
      </Box>
    );
  }
  
  const { results: pokemons } = data;

  return (
    <Grid 
      container spacing={3} 
      sx={{
        display:"flex", 
        justifyContent:"center", 
        flexWrap: "wrap", 
        padding: 1,
      }}>
        {pokemons?.map((pokemon, index) => (
          <Grid item key={index}>
              <PokemonCard {...pokemon} />
          </Grid>
        ))}
    </Grid>
  );
}

export default PokemonList;