import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Details = lazy(() => import('pages/Details/Details'));

export const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<Details />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};
