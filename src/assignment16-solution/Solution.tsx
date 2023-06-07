// import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import {
  wannaGoState,
  haveBeenState,
  favsState,
  ICountry,
  Keys,
} from './atoms';
import { useEffect } from 'react';

// const Wrapper = styled.main`
//   max-width: 320px;
//   margin: 0 auto;
// `;

// const Container = styled.div`
//   form {
//     input {
//       width: 100%;
//       box-sizing: border-box;
//     }
//   }
// `;

// const Countries = styled.section`
//   margin-top: 20px;
// `;

// const Country = styled.div`
//   display: flex;
//   align-items: center;
//   span {
//     font-size: 20px;
//     font-weight: 600;
//     margin-right: 10px;
//   }
//   button {
//     font-size: 12px;
//     padding: 10px;
//   }
// `;

// const Error = styled.span`
//   color: tomato;
//   font-weight: 600;
// `;

interface IForm {
  name: string;
}

export default function App() {
  const { register, handleSubmit, formState, setValue } =
    useForm<IForm>({
      mode: 'onSubmit',
    });

  const [wannaGo, setWannaGo] =
    useRecoilState(wannaGoState);
  const [haveBeen, setHaveBeen] =
    useRecoilState(haveBeenState);
  const [favs, setFavs] = useRecoilState(favsState);

  const onValid = ({ name }: IForm) => {
    setWannaGo((current) => [
      ...current,
      { name, id: Date.now() },
    ]);
    setValue('name', '');
  };

  useEffect(() => {
    localStorage.setItem(
      Keys.WANNA_GO,
      JSON.stringify(wannaGo),
    );
    localStorage.setItem(
      Keys.HAVE_BEEN,
      JSON.stringify(haveBeen),
    );
    localStorage.setItem(Keys.FAVS, JSON.stringify(favs));
  }, [wannaGo, haveBeen, favs]);

  const getCountry = (id: number, arr: ICountry[]) =>
    arr.find((country) => country.id === id);

  const deleteCountry = (id: number, arr: ICountry[]) =>
    arr.filter((country) => country.id !== id);

  const addCountry = (
    country: ICountry,
    arr: ICountry[],
  ) => [...arr, country];

  const onCheckedClick = (id: number) => {
    const country = getCountry(id, wannaGo);
    if (!country) return;
    setWannaGo((current) => deleteCountry(id, current));
    setHaveBeen((current) => addCountry(country, current));
  };

  const onLikedClick = (id: number) => {
    const country = getCountry(id, haveBeen);
    if (!country) return;
    setHaveBeen((current) => deleteCountry(id, current));
    setFavs((current) => addCountry(country, current));
  };

  const onDislikeClick = (id: number) => {
    const country = getCountry(id, favs);
    if (!country) return;
    setFavs((current) => deleteCountry(id, current));
    setHaveBeen((current) => addCountry(country, current));
  };

  const onCancelClick = (id: number) => {
    const country = getCountry(id, haveBeen);
    if (!country) return;
    setHaveBeen((current) => deleteCountry(id, current));
    setWannaGo((current) => addCountry(country, current));
  };

  const onTrashClick = (id: number) => {
    const country = getCountry(id, wannaGo);
    if (!country) return;
    setWannaGo((current) => deleteCountry(id, current));
  };

  return (
    <div>
      <div>
        <h2>내가 가고싶은 나라들</h2>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            {...register('name', {
              required: '😠 required!',
            })}
            placeholder='이름'
            type='text'
          />
          <span>{formState.errors.name?.message}</span>
          <input type='submit' value='가자!️' />
        </form>
        <div>
          {wannaGo.map((country) => (
            <div key={country.id}>
              <span>{country.name}</span>
              <button
                onClick={() => onCheckedClick(country.id)}
              >
                ✅
              </button>
              <button
                onClick={() => onTrashClick(country.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>내가 가본 나라들</h2>
        <div>
          {haveBeen.map((country) => (
            <div key={country.id}>
              <span>{country.name}</span>
              <button
                onClick={() => onLikedClick(country.id)}
              >
                👍🏻
              </button>
              <button
                onClick={() => onCancelClick(country.id)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>내가 좋아하는 나라들</h2>
        <div>
          {favs.map((country) => (
            <div key={country.id}>
              <span>{country.name}</span>
              <button
                onClick={() => onDislikeClick(country.id)}
              >
                👎🏻
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
