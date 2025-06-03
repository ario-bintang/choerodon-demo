import Home from '../pages/Home';
import Test from '../pages/Test';

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
];

export default routes;
