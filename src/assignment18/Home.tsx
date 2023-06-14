import styled, {
  createGlobalStyle,
} from 'styled-components';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color:#090709;
    color: white;
  }
  a {
    text-decoration:none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 70vw;
`;

const Contents = styled.div`
  padding-top: 120px;
`;

const Home = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Contents>
        <Outlet />
      </Contents>
    </Wrapper>
  );
};

export default Home;
