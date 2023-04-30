import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";
import {AdminUserEdit} from "./admin/adminPages/AdminUser/adminUserEditPage/AdminUserEdit";
import {AdminNewUser} from "./admin/adminPages/AdminUser/adminNewUserPage/AdminNewUser";
import AdminUserPage from "./admin/adminPages/AdminUser/adminUserPage/AdminUserPage";
import {AdminMovieEdit} from "./admin/adminPages/AdminMovie/adminMovieEditPage/AdminMovieEdit";
import AdminActorEdit from "./admin/adminPages/AdminActor/adminActorEditPage/AdminActorEdit";
import {AdminMoviePage} from "./admin/adminPages/AdminMovie/adminMoviePage/AdminMoviePage";
import AdminListPage from "./admin/adminPages/adminListPage/AdminListPage";
import {AdminActor} from "./admin/adminPages/AdminActor/adminActorPage/AdminActor";
import Subscription from "./pages/subscriptionPage/Subscription";
import {getCurrentUser} from "./utils/getCurrentUser/getToken";
import AdminPage from "./admin/adminPages/adminPage/AdminPage";
import SubsPage from "./pages/subscriptionsPage/SubsPage";
import NotFoundTest from "./pages/notFoundPage/NotFound";
import UserEditPage from "./pages/userEdit/UserEditPage";
// import ActorPage from "./pages/actorPage/ActorPage";
import Payment from "./pages/paymentPage/Payment";
import Register from "./pages/register/Register";
import FilmPage from "./pages/filmPage/FilmPage";
import UserPage from "./pages/userPage/UserPage";
import Layout from "./components/layot/Layout";
import FAQPage from "./pages/faqPage/FAQPage";
import Video from "./pages/videoPage/Video";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import './index.scss';
import {ProtectedRoute} from "./admin/ProtectedRoute";
// import ActorsPage from "./pages/actorsPage/ActorsPage";
import {lazy, Suspense} from "react";
import Loader from "./components/Loader/Loader";
import LikedMoviesPage from "./pages/likedMoviesPage/LikedMoviesPage";
import MovieSearchPage from "./pages/movieSearchPage/MovieSearchPage";

const ActorPage = lazy(() => import('./pages/actorPage/ActorPage'));
const ActorsPage = lazy(() => import('./pages/actorsPage/ActorsPage'));

function App() {
  const currentUser = getCurrentUser();

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
      path: '/video/:id',
      element: <Video />
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
          path: '/movies',
          element: <Home type='movie' />
        },
        {
          path: '/cartoons',
          element: <Home type="cartoons" />
        },
        {
          path: '/search',
          element: <MovieSearchPage />
        },
        {
          path: '/actors',
          element: <Suspense fallback={<Loader />}> <ActorsPage /> </Suspense>
        },
        {
          path: `/likedMovies/:id`,
          element: <LikedMoviesPage />
        },
        {
          path: '/film/:id',
          element: <FilmPage />
        },
        {
          path: '/actor/:id',
          element: <Suspense fallback={<Loader />}> <ActorPage /> </Suspense>
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
        {
          path: '/user/:id',
          element: <UserPage />
        },
        {
          path: '/user/edit/:id',
          element: <UserEditPage />
        },
        // todo finish it later
        {
          path: '/faq',
          element: <FAQPage />
        },
        {
          path: '/admin',
          element: currentUser && <ProtectedRoute isAdmin={currentUser.isAdmin} children={<AdminPage />}/>
          // element: <AdminPage />
        },
        {
          path: '/admin/users',
          element: currentUser && <ProtectedRoute isAdmin={currentUser.isAdmin} children={<AdminUserPage />}/>
          // element: <AdminUserPage />
        },
        {
          path: '/admin/movies',
          element: currentUser && <ProtectedRoute isAdmin={currentUser.isAdmin} children={<AdminMoviePage />}/>
          // element: <AdminMoviePage />
        },
        {
          path: '/admin/actors',
          element: currentUser && <ProtectedRoute isAdmin={currentUser.isAdmin} children={<AdminActor />}/>
          // element: <AdminActor />
        },
        {
          path: '/admin/lists',
          element: currentUser && <ProtectedRoute isAdmin={currentUser.isAdmin} children={<AdminListPage />}/>
          // element: <AdminListPage />
        },
        {
          path: '/admin/user/:id',
          element: currentUser && <ProtectedRoute isAdmin={currentUser.isAdmin} children={<AdminUserEdit />}/>
          // element: <AdminUserEdit />
        },
        {
          path: '/admin/movie/:id',
          element: currentUser && <ProtectedRoute isAdmin={currentUser.isAdmin} children={<AdminMovieEdit />}/>
          // element: <AdminMovieEdit />
        },
        {
          path: '/admin/actor/:id',
          element: currentUser && <ProtectedRoute isAdmin={currentUser.isAdmin} children={<AdminActorEdit />}/>
          // element: <AdminActorEdit />
        },
        {
          path: '/admin/user/newUser',
          element: currentUser && <ProtectedRoute isAdmin={currentUser.isAdmin} children={<AdminNewUser />}/>
          // element: <AdminNewUser />
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
