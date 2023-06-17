import styled, {
  createGlobalStyle,
} from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './assignment18/components/Header';

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

const Container = styled.div`
  margin-top: 150px;
`;

const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default App;
