import ComingSoon from './ComingSoon';
import Movies from './Movies';
import { createBrowserRouter } from 'react-router-dom';
import NowPlaying from './NowPlaying';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Movies />,
    children: [
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
