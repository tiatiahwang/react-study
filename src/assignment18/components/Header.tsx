import { motion } from 'framer-motion';
import {
  Link,
  PathMatch,
  useMatch,
} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  width: 100%;
  background: black;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Items = styled.ul`
  list-style: none;
  display: flex;
  font-size: 20px;
  font-weight: 700;
`;

const Item = styled.li`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 5px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: red;
`;

export default function Header() {
  const homeMatch: PathMatch<string> | null = useMatch('');
  const comingMatch: PathMatch<string> | null =
    useMatch('coming-soon');
  const nowMatch: PathMatch<string> | null =
    useMatch('now-playing');

  return (
    <Nav>
      <Items>
        <Item>
          <Link to=''>
            POPULAR{' '}
            {homeMatch && <Circle layoutId='circle' />}
          </Link>
        </Item>
        <Item>
          <Link to='coming-soon'>
            COMING SOON{' '}
            {comingMatch && <Circle layoutId='circle' />}
          </Link>
        </Item>
        <Item>
          <Link to='now-playing'>
            NOW PLAYING{' '}
            {nowMatch && <Circle layoutId='circle' />}
          </Link>
        </Item>
      </Items>
    </Nav>
  );
}
