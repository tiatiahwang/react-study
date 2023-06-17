import { useQuery } from '@tanstack/react-query';
import { IAPIResponse, getNowPlaying } from '../api';
import styled from 'styled-components';
import {
  PathMatch,
  useMatch,
  useNavigate,
} from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useScroll,
} from 'framer-motion';
import Movies from '../components/Movies';
import Modal from '../components/Modal';

const Wrapper = styled.div`
  margin-top: 30px;
`;

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  place-items: center;
  text-align: center;
  div {
    cursor: pointer;
  }
`;

const NowPlaying = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const movieModalMatch: PathMatch<string> | null =
    useMatch('/now-playing/:id');

  const { isLoading, data } = useQuery<IAPIResponse>(
    ['now-playing'],
    getNowPlaying,
  );

  const onMovieClick = (movieId: number) => {
    navigate(`/now-playing/${movieId}`);
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
            url='/now-playing'
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default NowPlaying;
