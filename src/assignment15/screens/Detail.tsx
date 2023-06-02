import { useParams } from 'react-router-dom';
import { fetchDetail } from '../api';
import { useQuery } from '@tanstack/react-query';

interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
  sourceUrl: string;
  films: string[];
}

export default function Detail() {
  const { id } = useParams<string>();
  const { isLoading, data } = useQuery<ICharacter>(
    ['detail', id],
    () => fetchDetail(id!),
  );
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>{data?.name}</div>
      )}
    </div>
  );
}
