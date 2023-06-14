import { createBrowserRouter } from 'react-router-dom';
import ComingSoon from './ComingSoon';
import Movies from './Movies';
import NowPlaying from './NowPlaying';
import Home from './Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '',
        element: <Movies />,
        children: [
          {
            path: 'movies/:id',
            element: <Movies />,
          },
        ],
      },
      {
        path: 'coming-soon',
        element: <ComingSoon />,
      },
      {
        path: 'now-playing',
        element: <NowPlaying />,
      },
    ],
  },
]);
