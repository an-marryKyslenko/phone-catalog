import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css';
import './index.scss';
import './modules/shared/styles/null.scss';
import './modules/shared/styles/index.scss';
import { App } from './App';
import { ProductsProvider } from './modules/shared/context/productsContext';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductsProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ProductsProvider>,
);
