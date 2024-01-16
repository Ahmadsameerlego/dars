import { createRouter, createWebHistory } from 'vue-router'

import authLayout from '@/views/authLayout.vue';
import dashboardLayout from '@/views/dashboardLayout.vue'
const routes = [
  {
    path : '/auth',
    component : authLayout,
    children : [
      {
        path : '/login',
        component : ()=> import('@/views/auth/loginView.vue')
      },
      {
        path : '/register',
        component : ()=> import('@/views/auth/registerView.vue')
      }
    ]
  } ,
  {
    path : '/dashboard',
    component : dashboardLayout,
    children : [
      // main 
      {
        path : '/',
        component : ()=> import('@/views/dashboard/homeView.vue')
      },
      {
        path : '/contact',
        component : ()=> import('@/views/dashboard/contactusView.vue')
      },
      {
        path : '/rates',
        component : ()=> import('@/views/dashboard/ratesView.vue')
      },
      // orders 
      {
        path : '/orders/pending',
        component : ()=> import('@/views/dashboard/orders/pendingOrders.vue')
      },
      {
        path : '/orders/waitingPay',
        component : ()=> import('@/views/dashboard/orders/waiting_pay.vue')
      },
      {
        path : '/orders/finished',
        component : ()=> import('@/views/dashboard/orders/finishedOrders.vue')
      },
      {
        path : '/order/details/:id',
        component : ()=> import('@/views/dashboard/orders/orderDetails.vue')
      },
      // financial 
      {
        path : '/financial/wallet',
        component : ()=> import('@/views/dashboard/financial/walletOrders.vue')
      },
      {
        path : '/financial/settlement',
        component : ()=> import('@/views/dashboard/financial/settlementView.vue')
      },
      {
        path : '/financial/details/:id',
        component : ()=> import('@/views/dashboard/financial/settlement_details.vue')
      },
      // director
      {
        path : '/directors/management',
        component : ()=> import('@/views/dashboard/director/manageDirector.vue')
      },
      {
        path : '/directors/reports',
        component : ()=> import('@/views/dashboard/director/reportsDirector.vue')
      },
      {
        path : '/directors/add',
        component : ()=> import('@/views/dashboard/director/addDirector.vue')
      },
      {
        path : '/directors/show/:id',
        component : ()=> import('@/views/dashboard/director/directorInfo.vue')
      },
      // config 
      {
        path : '/config/department',
        component : ()=> import('@/views/dashboard/config/departmentsSetting.vue')
      },
      {
        path : '/config/entity',
        component : ()=> import('@/views/dashboard/config/entitySetting.vue')
      },
      {
        path : '/config/faculty',
        component : ()=> import('@/views/dashboard/config/faculitiesSetting.vue')
      },
      {
        path : '/config/prices',
        component : ()=> import('@/views/dashboard/config/pricesSettings.vue')
      },
      {
        path : '/config/register',
        component : ()=> import('@/views/dashboard/config/registerSetting.vue')
      },
      {
        path : '/config/shape',
        component : ()=> import('@/views/dashboard/config/registerShapeSetting.vue')
      },
      {
        path : '/config/school',
        component : ()=> import('@/views/dashboard/config/schoolsSetting.vue')
      },
      {
        path : '/config/studYears',
        component : ()=> import('@/views/dashboard/config/studyYearsSetting.vue')
      },

      // generals 
      {
        path : '/addFaculty',
        component : ()=> import('@/views/dashboard/general/addFaculty.vue')
      },
      {
        path : '/addDepartment',
        component : ()=> import('@/views/dashboard/general/addDepartment.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router