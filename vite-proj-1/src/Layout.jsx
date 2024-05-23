import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import App from './App.jsx';
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import User from "./components/User/User.jsx";
import Layout from './Layout.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
      <Route path="" element = {<Home/>}/>
      <Route path="about" element = {<About />} />
      <Route path="user/:id" element = {<User />} />
        <Route path=":userid" element = {<User />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

