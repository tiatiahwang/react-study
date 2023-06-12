// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(
//   document.getElementById('root')!,
// );
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// );

// import { RouterProvider } from 'react-router-dom';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import router from './router';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { router } from './assignment18/router';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { RecoilRoot } from 'recoil';
// import App from './App';

// const rootElement = document.getElementById('root')!;
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <RecoilRoot>
//       <App />
//     </RecoilRoot>
//   </React.StrictMode>,
// );
