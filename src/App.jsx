import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from './MainComponents/Layout/Layout';
import Home from './MainComponents/Home/Home';
import Categories from './MainComponents/Categories/Categories';
import CategoriesDetails from './MainComponents/CategoriesDetails/CategoriesDetails';
import MealsDetails from './MainComponents/MealsDetails/MealsDetails';
import Origin from './MainComponents/Origin/Origin';
import OriginDetails from './MainComponents/OriginDetails/OriginDetails';
import Ingredients from './MainComponents/Ingredients/Ingredients';
import IngredientsDetails from './MainComponents/IngredientsDetails/IngredientsDetails';
import NotFound from './MainComponents/NotFound/NotFound';
import SearchBar from './MainComponents/Search/Search';


let query = new QueryClient();

function App() {
  let router = createBrowserRouter([{
    path: '/Yummies/', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: '/Yummies/categories', element: <Categories /> },
      { path: '/Yummies/ingredients', element: <Ingredients /> },
      { path: '/Yummies/originLocation', element: <Origin /> },
      { path: '/Yummies/search', element: <SearchBar /> },
      { path: '/Yummies/categoriesDetails/:categoryName', element: <CategoriesDetails /> },
      { path: '/Yummies/originDetails/:countryName', element: <OriginDetails /> },
      { path: '/Yummies/mealsDetails/:id', element: <MealsDetails /> },
      { path: '/Yummies/ingredientsDetails/:ingredientName', element: <IngredientsDetails /> },
      { path: '*', element: <NotFound /> },
    ]
  }])

  return (
    <QueryClientProvider client={query}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
