import { Link, Outlet, useParams } from 'react-router-dom';
import { authors } from '../db';

export default function Author() {
  let { name } = useParams();
  name = name.replaceAll('_', ' ');
  const author = authors.filter(
    (author) => author.name === name,
  )[0];
  return (
    <div>
      <h1>{author.name}</h1>
      {author.books.map((book) => {
        const bookName = book.name.replaceAll(/\s+/g, '_');
        return (
          <li key={book.id}>
            <Link to={bookName}>{book.name}</Link>
          </li>
        );
      })}
      <Outlet context={{ books: author.books }} />
    </div>
  );
}
