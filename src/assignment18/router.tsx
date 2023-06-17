import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Popular from './screens/Popular';
import ComingSoon from './screens/ComingSoon';
import NowPlaying from './screens/NowPlaying';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Popular />,
        children: [
          {
            path: 'popular/:id',
            element: <Popular />,
          },
        ],
      },
      {
        path: 'coming-soon',
        element: <ComingSoon />,
        children: [
          {
            path: ':id',
            element: <ComingSoon />,
          },
        ],
      },
      {
        path: 'now-playing',
        element: <NowPlaying />,
        children: [
          {
            path: ':id',
            element: <NowPlaying />,
          },
        ],
      },
    ],
  },
]);
