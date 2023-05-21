import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { useParams } from 'react-router-dom';
import DetailCard from './components/DetailCard';

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);
  const getCharacter = async () => {
    const {
      data: { results },
    } = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`,
      )
    ).json();
    setCharacter(results[0]);
    setLoading(false);
  };
  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <div>
      {loading ? (
        <Layout>
          <p>로딩중</p>
        </Layout>
      ) : (
        <Layout
          canGoBack={true}
          title={character.name}
          bgUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        >
          {character?.comics?.items.length > 0 ? (
            <DetailCard
              data={character.comics.items}
              title='COMICS'
            />
          ) : null}
          {character?.series?.items.length > 0 ? (
            <DetailCard
              data={character.series.items}
              title='SERIES'
            />
          ) : null}
          {character?.stories?.items.length > 0 ? (
            <DetailCard
              data={character.stories.items}
              title='STORIES'
            />
          ) : null}
        </Layout>
      )}
    </div>
  );
};

export default Detail;
