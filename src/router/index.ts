import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue'),
        children: [
          {
            path: '',
            component: () => import('@/views/Tab1/Tab1Root.vue'),
          },
          {
            path: 'level2/:lid',
            component: () => import('@/views/Tab1/Level2.vue'),
            children: [
              {
                path: '',
                component: () => import('@/views/Tab1/Level2Root.vue'),
              },
              {
                path: 'alpha/:id',
                component: () => import('@/views/Tab1/Level2/Level3Alpha.vue'),
              },
              {
                path: 'beta/:id',
                component: () => import('@/views/Tab1/Level2/Level3Beta.vue'),
              },
            ]
          }
        ]
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
