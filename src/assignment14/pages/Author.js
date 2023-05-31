import { Link, Outlet, useParams } from 'react-router-dom';
import { authors } from '../db';

export default function Author() {
  const { name } = useParams();
  const author = authors.filter(
    (author) => author.name === name.split('_').join(' '),
  )[0];
  return (
    <div>
      <h1>{author.name}</h1>
      {author.books.map((book) => {
        const bookName = book.name.replace(/\s+/g, '_');
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
