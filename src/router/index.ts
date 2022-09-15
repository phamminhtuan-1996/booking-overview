import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component:  () => import('@/views/LoginAuthenTication/LoginAuthenTication.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component:  () => import('@/views/ProfileUser/ProfileUser.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component:  () => import('@/views/ProfileUserEdit/ProfileUserEdit.vue')
  },
  {
    path: '/overview',
    name: 'overview',
    component:  () => import('@/views/BookingOverview/BookingOverview.vue')
  },
  {
    path: '/details/:id',
    name: 'details',
    component:  () => import('@/views/BookingOverviewDetails/BookingOverviewDetails.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
