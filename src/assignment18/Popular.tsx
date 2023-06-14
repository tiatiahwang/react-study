import { useQuery } from '@tanstack/react-query';
import {
  IAPIResponse,
  IMovieDetail,
  getMovie,
  getPopular,
  makeImagePath,
} from './api';
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
import { useEffect } from 'react';

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  place-items: center;
  text-align: center;
  div {
    cursor: pointer;
  }
`;

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

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const MovieModal = styled(motion.div)`
  position: absolute;
  width: 600px;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: #181618;
  text-align: left;
`;

const DetailCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;

const DetailTitle = styled.h3`
  margin: 0;
  padding: 20px;
  font-size: 46px;
  position: relative;
  top: -80px;
`;

const DetailOverview = styled.p`
  margin: 0;
  padding: 0 20px;
  position: relative;
  top: -80px;
  line-height: 1.3;
`;

const Popular = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const movieModalMatch: PathMatch<string> | null =
    useMatch('/movies/:id');

  const { isLoading, data } = useQuery<IAPIResponse>(
    ['popular'],
    getPopular,
  );

  const { data: movieDetailData } = useQuery<IMovieDetail>(
    ['detail', movieModalMatch?.params.id!],
    () => getMovie(movieModalMatch?.params.id!),
  );

  console.log('detail', movieDetailData);

  const onMovieClick = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  // 영화 모달창 켜졌을때, 뒤에 화면 클릭시 모달창 닫기
  const onOverlayClick = () => {
    navigate(-1);
  };

  // 영화 모달창이 켜졌을때, 뒤에 화면 스크롤 막기
  useEffect(() => {
    if (movieModalMatch) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [movieModalMatch]);

  const clickedMovie =
    movieModalMatch?.params.id &&
    data?.results.find(
      (movie) =>
        String(movie.id) === movieModalMatch.params.id,
    );

  console.log(clickedMovie);

  return (
    <Container>
      {isLoading ? <div>Loading...</div> : null}
      {data?.results?.map((movie) => (
        <div
          key={movie.id}
          onClick={() => onMovieClick(movie.id)}
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
        </div>
      ))}
      <AnimatePresence>
        {movieModalMatch ? (
          <>
            <Overlay
              onClick={onOverlayClick}
              animate={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              exit={{ opacity: 0 }}
            />
            <MovieModal
              style={{
                top: scrollY.get() + 120,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              exit={{ opacity: 0 }}
              layoutId={movieModalMatch.params.movieId}
            >
              {clickedMovie && (
                <>
                  <DetailCover
                    style={{
                      backgroundImage: `linear-gradient(to top, #181618, transparent), url(${makeImagePath(
                        clickedMovie.backdrop_path,
                      )})`,
                    }}
                  />
                  <DetailTitle>
                    {clickedMovie.title}
                  </DetailTitle>
                  <DetailOverview>
                    {clickedMovie.overview}
                    <br />
                    <br />
                    {movieDetailData ? (
                      <>
                        Budget: $
                        {movieDetailData.budget.toLocaleString()}
                        <br />
                        Revenue: $
                        {movieDetailData.revenue.toLocaleString()}
                        <br />
                        Runtime: {
                          movieDetailData.runtime
                        }{' '}
                        minutes <br />
                        Rating:{' '}
                        {movieDetailData.vote_average.toFixed(
                          1,
                        )}{' '}
                        <br />
                        HomePage: {movieDetailData.homepage}
                      </>
                    ) : null}
                  </DetailOverview>
                </>
              )}
            </MovieModal>
          </>
        ) : null}
      </AnimatePresence>
    </Container>
  );
};

export default Popular;
