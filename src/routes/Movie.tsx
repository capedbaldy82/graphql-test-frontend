import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMoive($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

const Movie = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (error) {
    return <h1>Network Error</h1>;
  }

  return (
    <div>
      <h1>{data?.movie?.title}</h1>
    </div>
  );
};

export default Movie;
