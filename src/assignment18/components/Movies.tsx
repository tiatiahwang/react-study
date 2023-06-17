import styled from 'styled-components';
import { IAPIResponse, makeImagePath } from '../api';
import { AnimatePresence, motion } from 'framer-motion';

const Image = styled(motion.div)`
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

interface IMovies {
  data: IAPIResponse;
  onMovieClick: (movieId: number) => void;
}

const Movies = ({ data, onMovieClick }: IMovies) => {
  return (
    <AnimatePresence>
      {data.results.map((movie, i) => (
        <motion.div
          key={movie.id}
          onClick={() => onMovieClick(movie.id)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: i * 0.2 }}
        >
          <Image
            layoutId={movie.id + ''}
            whileHover={{
              scale: 1.1,
              y: -10,
              transition: { duration: 0.2 },
            }}
          >
            <img
              src={makeImagePath(movie.poster_path)}
              alt={movie.title}
            />
          </Image>
          <Title>{movie.title}</Title>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default Movies;
