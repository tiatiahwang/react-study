import { useQuery } from '@tanstack/react-query';
import {
  IAPIResponse,
  getPopular,
  makeImagePath,
} from './api';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  place-items: center;
  text-align: center;
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
  const { isLoading, data } = useQuery<IAPIResponse>(
    ['popular'],
    getPopular,
  );

  return (
    <Container>
      {isLoading ? <div>Loading...</div> : null}
      {data?.results?.map((movie) => (
        <div key={movie.id}>
          <Image>
            <img
              src={makeImagePath(movie.poster_path)}
              alt={movie.title}
            />
          </Image>
          <Title>{movie.title}</Title>
        </div>
      ))}
    </Container>
  );
};

export default Movies;
