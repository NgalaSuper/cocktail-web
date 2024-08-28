import react from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {About, Cocktail, Error, HomeLayout, Landing, Newsletter} from './pages/indexPages';
import {loader as laningLoader} from './pages/Landing';
import {loader as singleCocktailLoader} from './pages/Cocktail';
import {action as newsletterAction} from './pages/Newsletter'
const router = createBrowserRouter([
  {
    path:'/', //where is the domain
    element:<HomeLayout />, // here you can add the components
    errorElement:<Error />,
    children:[
    {
     index:true,
      element:<Landing />,
      errorElement:<h2>Something Went Wrong...</h2>,
      loader:laningLoader,
    },
    {
      path:'cocktail/:id',
      loader:singleCocktailLoader,
      element:<Cocktail />
    }, {
      path:'newsletter',
      element:<Newsletter />,
      action:newsletterAction
    },
    {
      path:'about',
      element:<About />
    }
    ]
  },
  {
    path:'/about', //correct page
    element:<About />// here you can add the components
  },
])
function App() {
 

  return  <RouterProvider router={router} />
};


export default App
