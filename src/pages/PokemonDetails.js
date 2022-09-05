import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { 
    Typography, 
    Box,
    Chip,
    Grid,
    Stack,
    Divider
} from "@mui/material";
import axios from "axios";

function PokemonDetails(name) {
    const [isFetching, setIsFetching] = useState(false);
    const {id} = useParams();

    const [pokemonDetails, setPokemonDetails] = useState({
        "name": "",
        "id": 0,
        "types": [
            {
                "type": {
                    "name": ""
                }
            }
        ]
    });

    const getPokemon = async (id) => {
        try {
          const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const pokemon = data;
          setPokemonDetails(pokemon);
          setIsFetching(true);
        } catch (error) {
          console.error(error);
        }
    };

    useEffect(() => {
        getPokemon(id);
    }, [id]);
   
    useEffect(() => {
        document.title = pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.substring(1).toLowerCase() + " / My Pokedex";
    });
    
    return (
    <Box sx={{ display: "flex", flexFlow: "column" }}>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography 
                            variant="h1" 
                            component="div" 
                            sx={{ 
                            flex: 1, 
                            textAlign: "center", 
                            textTransform: "capitalize"
                        }}>
                            {pokemonDetails.name}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2, textAlign: "center" }}>
                <Typography gutterBottom variant="h4">
                    Types
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                    {isFetching && pokemonDetails?.types.map((types, index) => (
                        <Stack direction="row" spacing={1} key={index}>
                            <Chip color="primary" label={types.type.name} sx={{ textTransform: "capitalize" }} /> 
                        </Stack> 
                    ))}
                </Box>
            </Box>
        </Box>
    </Box>
  );
}

export default PokemonDetails;