import MainPage from '../MainPage';
import SearchPage from '../SearchPage';

const routes = {
  userPage: {
      url: '/',
      component: MainPage,
      label: 'main'
  },
  datePage: {
      url: '/date',
      component: SearchPage,
      label: 'date'
  },
  numberPage: {
    url: '/number',
    component: SearchPage,
    label: 'number'
  },
  yearPage: {
    url: '/year',
    component: SearchPage,
    label: 'year'
  }
}
export default routes;