import {
  Link,
  Outlet,
  useOutletContext,
  useParams,
} from 'react-router-dom';

export default function Book() {
  const { bookName } = useParams();
  const { books } = useOutletContext();
  const selectedBook = books.filter(
    (book) => book.name === bookName.split('_').join(' '),
  )[0];
  return (
    <div>
      <h1>{selectedBook.name}</h1>
      <div>
        <Link to='chapters'>Chapters</Link>
      </div>
      <div>
        <Link to='characters'>Characters</Link>
      </div>
      <Outlet context={{ bookDetail: selectedBook }} />
    </div>
  );
}
