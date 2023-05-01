import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Skill from './skill';
import Reference from './reference';
import Project from './project';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'skill',
    element: <Skill />,
  },
  {
    path: 'reference',
    element: <Reference />,
  },
  {
    path: 'project',
    element: <Project />,
    // loader: teamLoader,
  },
]);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
      <ColorModeScript />
    </ChakraProvider>
  </StrictMode>
);
