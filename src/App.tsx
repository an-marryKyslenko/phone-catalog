import { Route, Routes } from 'react-router-dom';
import Layout from './modules/shared/components/Layout';
import HomePage from './modules/HomePage';
import DevicesPage from './modules/DevicesPage';
import ProductDetailsPage from './modules/ProductDetailsPage';
import Favourites from './modules/Favourites';
import CartPage from './modules/CartPage';
import NotFoundPage from './modules/NotFoundPage';

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="phones" element={<DevicesPage />} />
      <Route path="tablets" element={<DevicesPage />} />
      <Route path="accessories" element={<DevicesPage />} />
      <Route path="phones/:productId" element={<ProductDetailsPage />} />
      <Route path="tablets/:productId" element={<ProductDetailsPage />} />
      <Route path="accessories/:productId" element={<ProductDetailsPage />} />
      <Route path="favourites" element={<Favourites />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
