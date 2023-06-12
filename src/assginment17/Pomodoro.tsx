import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { pomoState } from './atoms';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 800;
`;

const Timer = styled.div`
  padding: 60px 0;
  font-size: 80px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  div {
    width: 120px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Time = styled(motion.div)`
  background: white;
  color: #e84c3e;
  border-radius: 5px;
`;

const Icon = styled(motion.div)`
  margin-bottom: 60px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  padding: 10px;
  background: #b93d32;
  border-radius: 100%;
`;

const Record = styled.div`
  display: flex;
  gap: 40px;
  text-align: center;
`;

const Round = styled.div`
  p {
    padding: 5px 0;
    font-weight: 700;
    :first-child {
      opacity: 0.8;
    }
  }
`;

const Goal = styled(Round)``;

export default function App() {
  const [pomo, setPomo] = useRecoilState(pomoState);

  const [round, setRound] = useState(0);
  const [goal, setGoal] = useState(0);

  const onClickPlayAndPause = () => {
    setPomo((prev) => ({
      ...prev,
      isActive: !prev.isActive,
    }));
  };

  useEffect(() => {
    if (!pomo.isActive) return;

    const timer = setInterval(() => {
      setPomo((prev) => ({
        ...prev,
        remainSeconds: prev.remainSeconds - 1,
      }));

      if (pomo.remainSeconds === 0) {
        clearInterval(timer);
        setRound((prev) => prev + 1);
        setPomo({ isActive: false, remainSeconds: 1500 });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [pomo.isActive, pomo.remainSeconds, setPomo]);

  useEffect(() => {
    if (round === 4) {
      setGoal((prev) => prev + 1);
      setRound(0);
    }
  }, [round]);

  return (
    <Container>
      <Title>Pomodoro</Title>
      <Timer>
        <div>
          <Time animate={{ scale: 1 }}>
            {String(
              Math.floor(pomo.remainSeconds / 60),
            ).padStart(2, '0')}
          </Time>
        </div>
        :
        <div>
          {pomo.isActive ? (
            <Time
              animate={{
                scale: [0.3, 1],
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
                times: [0, 0.4],
                repeat: Infinity,
              }}
            >
              {String(pomo.remainSeconds % 60).padStart(
                2,
                '0',
              )}
            </Time>
          ) : (
            <Time animate={{ scale: 1 }}>
              {String(pomo.remainSeconds % 60).padStart(
                2,
                '0',
              )}
            </Time>
          )}
        </div>
      </Timer>
      <Icon
        onClick={onClickPlayAndPause}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.1 },
        }}
      >
        {pomo.isActive ? (
          <svg
            fill='white'
            stroke='currentColor'
            strokeWidth='3'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 5.25v13.5m-7.5-13.5v13.5'
            ></path>
          </svg>
        ) : (
          <svg
            fill='white'
            stroke='currentColor'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
            ></path>
          </svg>
        )}
      </Icon>
      <Record>
        <Round>
          <p>{round}/4</p>
          <p>ROUND</p>
        </Round>
        <Goal>
          <p>{goal}/12</p>
          <p>GOAL</p>
        </Goal>
      </Record>
    </Container>
  );
}
