import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 80px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Category = styled(Link)`
  font-weight: 700;
  font-size: 20px;
  margin: 0 10px;
`;

const Selected = styled.div<{ $background: string }>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: ${(props) => props.$background};
  margin-top: 6px;
`;

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <div>
        <Category to='/'>POPULAR</Category>
        <Selected
          $background={
            pathname === '/' ? 'red' : 'transparent'
          }
        />
      </div>
      <div>
        <Category to='/coming-soon'>COMING SOON</Category>
        <Selected
          $background={
            pathname === '/coming-soon'
              ? 'red'
              : 'transparent'
          }
        />
      </div>
      <div>
        <Category to='/now-playing'>NOW PLAYING</Category>
        <Selected
          $background={
            pathname === '/now-playing'
              ? 'red'
              : 'transparent'
          }
        />
      </div>
    </Wrapper>
  );
}
