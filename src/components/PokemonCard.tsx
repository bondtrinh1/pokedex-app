import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import {
  CircularProgress,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Alert,
  Box,
} from "@mui/material";
import { getPokemonByURL } from "../utils";

const PokemonCard = ({ name, url }) => {
  const { error, isFetching, data } = useQuery(
    `pokemon${name}`,
    () => getPokemonByURL(url),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  if (error) {
    // return <Alert severity="error">{error.message}</Alert>;
    return <Alert severity="error">Something went wrong...</Alert>;
  }

  if (isFetching) {
    return (
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const {
    sprites: { front_default },
  } = data;

  return (
    <Link to={`/pokemon/${name}`} style={{ textDecoration: "none" }}>
      <Card>
        <CardMedia component="img" image={front_default} alt={name} />
        <CardContent>
          <Typography
            sx={{
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PokemonCard;
