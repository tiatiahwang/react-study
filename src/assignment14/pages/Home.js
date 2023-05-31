import { Link } from 'react-router-dom';
import { authors } from '../db';

export default function Home() {
  return (
    <div>
      <h1>Best Seller Authors</h1>
      <ul>
        {authors.map((author) => {
          const name = author.name.replace(/\s+/g, '_');
          return (
            <li key={author.id}>
              <Link to={`/author/${name}`}>
                {author.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
