import { RouteRecordRaw } from 'vue-router';
import LayoutDefault from '@/layouts/LayoutDefault';
import { RouteName } from './models';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '/',
        name: RouteName.HOME,
        component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue')
      },
      {
        path: '/about',
        name: RouteName.ABOUT,
        component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue')
      },
      {
        path: '/users',
        name: RouteName.USERS,
        component: () => import(/* webpackChunkName: "users" */ '../views/Users/index.vue')
      }
    ]
  }
];

export default routes;
