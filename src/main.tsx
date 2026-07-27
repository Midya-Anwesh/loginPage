import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { routes } from './routes/routes';
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Provider } from 'react-redux';

import { addColors } from './constants/colors';
import { persistor, store } from './app/store';

import { PersistGate } from 'redux-persist/integration/react'

const browserRoutes = createBrowserRouter(routes);

addColors();

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <RouterProvider router={browserRoutes}/>
  </PersistGate>
  </Provider>
  
)
