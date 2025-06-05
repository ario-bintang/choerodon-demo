import EasyTable from '../pages/EasyTable';
import Home from '../pages/Home';
import Test from '../pages/Test';
import EditUser from '../pages/EditUser';
import AddUser from '../pages/AddUser';
import Clubs from '../pages/Clubs';
import ClubDetail from '../pages/ClubDetail';
import EasyTable2 from '../pages/EasyTable2';
import UserProfile from '../pages/UserProfile';

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
    path: '/profile/:id',
    component: UserProfile,
  },
  {
    path: '/easy-table',
    component: EasyTable2,
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
