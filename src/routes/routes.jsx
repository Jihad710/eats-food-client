import React from 'react';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Main from '../layouts/Main';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';

import Blog from '../pages/Blog/Blog';

import LoginLayout from '../layouts/LoginLayout';

import ChefsLayout from '../layouts/ChefsLayout';


import Register from '../Pages/Register/Register';
import Terms from '../Pages/Terms/Terms';
import Chefs from '../Pages/Home/Chefs/Chefs';
import Recipes from '../Pages/ChefsRecipes/Chefsbanner/Recipe/Recipes/Recipes';






  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginLayout />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        
        {
          path: "/",
          element: <Navigate to={`/chefs`}></Navigate>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element:<Register></Register>,
        },
        {
          path: "/blog",
          element:<Blog></Blog>
        },
        {
          path: "/terms",
          element:<Terms></Terms>
        },
        
      ],
    },
    {
      
        path: "chefs",
        element: <Main></Main>,
        loader:({params})=>fetch(`https://eats-food-server-site-jihad710.vercel.app/chefs`),
        //change link
        children:[
          {
            path:"/chefs",
            element:<Chefs></Chefs>
             
          },
        ]
      
    },
    {
      path: "recipes",
      element:<ChefsLayout></ChefsLayout>,
      children:[
        {
          path:":id",
          element:<Recipes></Recipes>,
          loader:({params})=>fetch(`https://eats-food-server-site-jihad710.vercel.app/recipes/${params.id}`)
          //change link

          
        }
      ]
    }

  ]);


export default router