import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  IMovie,
  IMovieDetail,
  getMovie,
  makeImagePath,
} from '../api';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const MovieModal = styled(motion.div)`
  z-index: 1000;
  position: absolute;
  width: 600px;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: auto;
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

const Icon = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

interface IModal {
  clickedMovie: IMovie;
  scrollY: number;
  movieId: string;
  url: string;
}

const Modal = ({
  clickedMovie,
  scrollY,
  movieId,
  url,
}: IModal) => {
  const navigate = useNavigate();

  const { data: movieDetailData } = useQuery<IMovieDetail>(
    ['detail', movieId],
    () => getMovie(movieId),
  );

  const onOverlayClick = () => {
    navigate(`${url}`);
  };
  return (
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
          top: scrollY + 120,
        }}
        layoutId={movieId}
      >
        <Icon onClick={onOverlayClick}>
          <svg
            fill='currentColor'
            viewBox='0 0 20 20'
            strokeWidth={1}
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              clipRule='evenodd'
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z'
            ></path>
          </svg>
        </Icon>
        {clickedMovie && (
          <>
            <DetailCover
              style={{
                backgroundImage: `linear-gradient(to top, #181618, transparent), url(${makeImagePath(
                  clickedMovie.backdrop_path,
                )})`,
              }}
            />
            <DetailTitle>{clickedMovie.title}</DetailTitle>
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
                  } minutes <br />
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
  );
};

export default Modal;
