import styled, {
  createGlobalStyle,
} from 'styled-components';
import Nav from './components/Nav';
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
`;

const Home = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Nav />
      <Outlet />
    </Wrapper>
  );
};

export default Home;
