import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Skill from './skill';
import Reference from './reference';
import Project from './project';
import Navbar from './components/Navbar';
import Testing from './testing';

const router = createBrowserRouter([
  {
    path: '',
    element: <Navbar />,
    children: [
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
      {
        path: 'testing',
        element: <Testing />,
      },
    ],
  },
]);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
      <ColorModeScript />
    </ChakraProvider>
  </StrictMode>
);
