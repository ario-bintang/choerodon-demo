import EasyTable from '../pages/EasyTable';
import Home from '../pages/Home';
import Test from '../pages/Test';
import EditUser from '../pages/EditUser';
import AddUser from '../pages/AddUser';
import Clubs from '../pages/Clubs';
import ClubDetail from '../pages/ClubDetail';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/test',
    component: Test,
  },
  {
    path: '/users',
    component: EasyTable,
  },
  {
    path: '/clubs',
    component: Clubs,
  },
  {
    path: '/clubs/:id',
    component: ClubDetail,
  },
  {
    path: '/edit/:id',
    component: EditUser,
  },
  {
    path: '/add',
    component: AddUser,
  }
];

export default routes;
