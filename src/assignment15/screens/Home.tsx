import { Link } from 'react-router-dom';
import { fetchAllCharacters } from '../api';
import { useQuery } from '@tanstack/react-query';
import { CharactersResponse } from '../types';

// interface ICharacters {
//   id: number;
//   name: string;
//   imageUrl: string;
// }

export default function Home() {
  const { isLoading, data } = useQuery<CharactersResponse>(
    ['allCharacters'],
    fetchAllCharacters,
  );

  return (
    <div>
      {isLoading ? <div>Loading</div> : null}
      <div>
        {data?.slice(0, 100).map((character) => (
          <div key={character.id}>
            <Link to={`/character/${character.id}`}>
              <div className='w-[100px] h-[100px]'>
                <img
                  className='w-full h-full rounded-full'
                  src={character.imageUrl}
                  alt={character.name}
                />
              </div>
              <div>{character.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
