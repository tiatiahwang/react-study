import { useSetRecoilState } from 'recoil';
import {
  Categories,
  INations,
  NationsState,
} from '../atoms';

function Nation({ id, name, category }: INations) {
  const setNations = useSetRecoilState(NationsState);
  const onClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const {
      currentTarget: { name: categoryName },
    } = event;
    setNations((prev) => {
      const target = prev.findIndex(
        (nation) => nation.id === id,
      );
      const newNation = {
        name,
        id,
        category: categoryName as any,
      };
      return [
        ...prev.slice(0, target),
        newNation,
        ...prev.slice(target + 1),
      ];
    });
  };
  return (
    <li>
      <span>{name}</span>
      {category === Categories.WISH && (
        <>
          <button name={Categories.BEEN} onClick={onClick}>
            ✅
          </button>
          <button name='' onClick={onClick}>
            🗑️
          </button>
        </>
      )}
      {category === Categories.BEEN && (
        <>
          <button name={Categories.LIKE} onClick={onClick}>
            👍🏻
          </button>
          <button name={Categories.WISH} onClick={onClick}>
            ❌
          </button>
        </>
      )}
      {category === Categories.LIKE && (
        <button name={Categories.BEEN} onClick={onClick}>
          👎🏻
        </button>
      )}
    </li>
  );
}

export default Nation;
