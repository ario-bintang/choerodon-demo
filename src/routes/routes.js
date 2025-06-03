import EasyTable from '../pages/EasyTable';
import EasyTable2 from '../pages/EasyTable2';
import Home from '../pages/Home';
import Test from '../pages/Test';
import EditUser from '../pages/EditUser';

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
    path: '/easy-table',
    component: EasyTable,
  },
  {
    path: '/easy-table2',
    component: EasyTable2,
  },
  {
    path: '/edit/:id',
    component: EditUser,
  }
];

export default routes;
