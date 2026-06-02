import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { routes } from './routes/routes';
import { createBrowserRouter, RouterProvider } from 'react-router'

import { addColors } from './constants/colors';

const browserRoutes = createBrowserRouter(routes);

addColors();

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={browserRoutes}/>
)
