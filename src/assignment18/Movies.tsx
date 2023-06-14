import { useQuery } from '@tanstack/react-query';
import {
  IAPIResponse,
  getPopular,
  makeImagePath,
} from './api';
import styled from 'styled-components';
import {
  PathMatch,
  useMatch,
  useNavigate,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  place-items: center;
  text-align: center;
  div {
    cursor: pointer;
  }
`;

const Image = styled.div`
  width: 200px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const Title = styled.div`
  padding-top: 10px;
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
`;

const Movies = () => {
  const navigate = useNavigate();
  const movieDetailMatch: PathMatch<string> | null =
    useMatch('/movies/:id');

  const { isLoading, data } = useQuery<IAPIResponse>(
    ['popular'],
    getPopular,
  );
  const onMovieClick = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <Container>
      {isLoading ? <div>Loading...</div> : null}
      {data?.results?.map((movie) => (
        <div
          key={movie.id}
          onClick={() => onMovieClick(movie.id)}
        >
          <Image>
            <img
              src={makeImagePath(movie.poster_path)}
              alt={movie.title}
            />
          </Image>
          <Title>{movie.title}</Title>
        </div>
      ))}
      <AnimatePresence>
        {movieDetailMatch ? (
          <motion.div
            layoutId={movieDetailMatch.params.id}
            style={{
              position: 'absolute',
              width: '40vw',
              height: '80vh',
              backgroundColor: 'red',
              top: 110,
              left: 0,
              right: 0,
              margin: '0 auto',
            }}
          />
        ) : null}
      </AnimatePresence>
    </Container>
  );
};

export default Movies;
