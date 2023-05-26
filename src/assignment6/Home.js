import { useEffect, useState } from 'react';
import NameCard from './components/NameCard';
import Layout from './components/Layout';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const {
      data: { results },
    } = await (
      await fetch(
        'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023&',
      )
    ).json();
    setCharacters(results);
    setLoading(false);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      {loading ? (
        <Layout>
          <p>로딩중</p>
        </Layout>
      ) : (
        <Layout title='MARVEL CHARACTERS'>
          <div className='grid gap-4 grid-cols-2'>
            {characters.map((character) => (
              <NameCard
                key={character.id}
                character={character}
              />
            ))}
          </div>
        </Layout>
      )}
    </div>
  );
};

export default Home;
