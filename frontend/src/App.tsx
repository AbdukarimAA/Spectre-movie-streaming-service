import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Layout from "./components/layot/Layout";
import Register from "./pages/register/Register";
import FilmPage from "./pages/filmPage/FilmPage";
import ActorPage from "./pages/actorPage/ActorPage";
import NotFoundTest from "./pages/notFoundPage/NotFound";
import SubsPage from "./pages/subscriptionsPage/SubsPage";
import Payment from "./pages/paymentPage/Payment";
import UserPage from "./pages/userPage/UserPage";
import FAQPage from "./pages/faqPage/FAQPage";
import AdminPage from "./pages/adminPage/AdminPage";
import Subscription from "./pages/subscriptionPage/Subscription";
import './index.scss';

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
          path: '/film/:id',
          element: <FilmPage />
        },
        {
          path: '/actor/:id',
          element: <ActorPage />
        },
        {
          path: '/subscriptions',
          element: <SubsPage />
        },
          // todo finish it later
        {
          path: '/subscriptions/:id',
          element: <Subscription />
        },
          // todo finish it later
        {
          path: '/payment',
          element: <Payment />
        },
        // todo finish it later
        {
          path: '/user',
          element: <UserPage />
        },
        // todo finish it later
        {
          path: '/faq',
          element: <FAQPage />
        },
        // todo finish it later
        {
          path: '/admin',
          element: <AdminPage />
        },
        {
          path: '*',
          element: <NotFoundTest />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
