import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
//import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Employee } from './components/Employee';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  /*{
    path: '/fetch-data',
    requireAuth: false,
    element: <FetchData />
  },*/
  {
    path: '/Employee',
    requireAuth: false,
    element: <Employee />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
