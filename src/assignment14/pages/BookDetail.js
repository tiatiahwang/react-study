import {
  useLocation,
  useOutletContext,
} from 'react-router-dom';

export default function BookDetail() {
  const { bookDetail } = useOutletContext();
  const { pathname } = useLocation();
  const title = pathname.split('/')[4];

  return title ? (
    <div>
      <h3>{title}</h3>
      <ul>
        {bookDetail[title].map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  ) : null;
}
