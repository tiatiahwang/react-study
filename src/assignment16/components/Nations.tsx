import { useRecoilValue } from 'recoil';
import { NationSelector } from '../atoms';
import CreateNations from './createNations';
import Nation from './Nation';

function Nations() {
  const [wish, been, like] = useRecoilValue(NationSelector);

  return (
    <div>
      <h2>내가 가고싶은 나라들</h2>
      <CreateNations />
      <ul>
        {wish.map((nation) => (
          <Nation key={nation.id} {...nation} />
        ))}
      </ul>
      <h2>내가 가본 나라들</h2>
      <ul>
        {been.map((nation) => (
          <Nation key={nation.id} {...nation} />
        ))}
      </ul>
      <h2>내가 좋아하는 나라들</h2>
      <ul>
        {like.map((nation) => (
          <Nation key={nation.id} {...nation} />
        ))}
      </ul>
    </div>
  );
}

export default Nations;
