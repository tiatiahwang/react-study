import { useQuery } from '@tanstack/react-query';
import { IAPIResponse, getPopular } from '../api';
import styled from 'styled-components';
import {
  PathMatch,
  useMatch,
  useNavigate,
} from 'react-router-dom';
import { AnimatePresence, useScroll } from 'framer-motion';
import Movies from '../components/Movies';
import Modal from '../components/Modal';

const Wrapper = styled.div`
  margin-top: 30px;
`;

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

const Popular = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const movieModalMatch: PathMatch<string> | null =
    useMatch('/popular/:id');

  const { isLoading, data } = useQuery<IAPIResponse>(
    ['popular'],
    getPopular,
  );

  const onMovieClick = (movieId: number) => {
    navigate(`/popular/${movieId}`);
  };

  const clickedMovie =
    movieModalMatch?.params.id &&
    data?.results.find(
      (movie) =>
        String(movie.id) === movieModalMatch.params.id,
    );

  return (
    <Wrapper>
      {isLoading ? <div>Loading...</div> : null}
      <Container>
        {data && (
          <Movies data={data} onMovieClick={onMovieClick} />
        )}
      </Container>
      <AnimatePresence>
        {movieModalMatch && clickedMovie ? (
          <Modal
            clickedMovie={clickedMovie}
            scrollY={scrollY.get()}
            movieId={movieModalMatch.params.id!}
            url='/'
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Popular;
