import { createBrowserRouter } from 'react-router-dom';
import ComingSoon from './ComingSoon';
import Popular from './Popular';
import NowPlaying from './NowPlaying';
import Home from './Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '',
        element: <Popular />,
        children: [
          {
            path: 'movies/:id',
            element: <Popular />,
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
