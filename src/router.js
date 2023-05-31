import { createBrowserRouter } from 'react-router-dom';
import About from './assignment14/pages/About';
import Author from './assignment14/pages/Author';
import Book from './assignment14/pages/Book';
import Home from './assignment14/pages/Home';
import Root from './assignment14/pages/Root';
import BookDetail from './assignment14/pages/BookDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'author/:name',
        element: <Author />,
        children: [
          {
            path: ':bookName',
            element: <Book />,
            children: [
              {
                path: 'chapters',
                element: <BookDetail />,
              },
              {
                path: 'characters',
                element: <BookDetail />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
