import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsMovies = () => {
  const { movieId } = useParams();

  // TODO: Hit the movie details api and render it
  useEffect(() => {}, []);

  return <div>{movieId}</div>;
};

export default DetailsMovies;
