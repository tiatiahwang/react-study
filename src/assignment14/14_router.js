import { createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Author from './pages/Author';
import Book from './pages/Book';
import Home from './pages/Home';
import Root from './pages/Root';
import BookDetail from './pages/BookDetail';

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
