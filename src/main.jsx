import React, { Profiler } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route, 
  Navigate
} from "react-router-dom";
import Layout from './components/Layout/layout.jsx';
import Repositories from './components/Layout/repos.jsx'
import ErrorPage from './components/ErrorPages/errorpage.jsx';
import Profile from './components/Layout/profile.jsx';
import Index from './components/Layout/index.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Index /> } errorElement={<ErrorPage/>} />
      <Route path='/Repositories' element={<Repositories />} errorElement={<ErrorPage/>} />
      <Route path='/Profile' element={<Profile />} errorElement={<ErrorPage/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
