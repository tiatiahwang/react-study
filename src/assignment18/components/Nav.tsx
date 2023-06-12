import {
  Link,
  useLocation,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';
import { styled } from 'styled-components';

const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 40px 0;
  position: fixed;
  width: 100%;
  top: 0;
  background: black;
  li {
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
  position: relative;
`;

const Circle = styled.span<{ $background: string }>`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: ${(props) => props.$background};
`;

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <li>
        <Category to='/'>
          POPULAR
          <Circle
            $background={pathname === '/' ? 'red' : ''}
          />
        </Category>
      </li>
      <li>
        <Category to='/coming-soon'>
          COMING SOON
          <Circle
            $background={
              pathname === '/coming-soon' ? 'red' : ''
            }
          />
        </Category>
      </li>
      <li>
        <Category to='/now-playing'>
          NOW PLAYING
          <Circle
            $background={
              pathname === '/now-playing' ? 'red' : ''
            }
          />
        </Category>
      </li>
    </Wrapper>
  );
}
