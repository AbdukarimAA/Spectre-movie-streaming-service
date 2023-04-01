import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Layout from "./components/layot/Layout";
import Register from "./pages/register/Register";
import FilmPage from "./pages/filmPage/FilmPage";
import './index.scss';
import ActorPage from "./pages/actorPage/ActorPage";
import NotFoundTest from "./pages/notFoundPage/NotFound";

function App() {

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/notFound',
      element: <NotFoundTest />
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/film',
          element: <FilmPage />
        },
        {
          path: '/actor/:id',
          element: <ActorPage />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
