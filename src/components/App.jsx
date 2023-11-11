import { Route, Routes } from 'react-router-dom';
import Details from 'pages/Details/Details';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';

import Layout from './Layout/Layout';
export const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId/*" element={<Details />} />
        </Routes>
      </Layout>
    </>
  );
};
