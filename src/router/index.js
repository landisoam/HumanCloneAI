import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CloneView from '../views/CloneView.vue'
import CloneVoiceView from '../views/CloneVoiceView.vue'
import HistoryView from '../views/HistoryView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
// Admin
import AdminDashboard from '../views/admin/DashboardView.vue'
import HumanModelView from '../views/admin/HumanModelView.vue'
import SpeakerModelView from '../views/admin/SpeakerModelView.vue'
// Web
// import WebHomePageView from '../views/web/HomePageView.vue' 
// App
import AppMusicUplaoder from '../views/AppMusicUploader.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'Human Clone',
    //   component: WebHomePageView
    // },
    {
      path: '/musicuploader',
      name: 'Music Uploader',
      component: AppMusicUplaoder
    },
    {
      path: '/history',
      name: 'History',
      component: HistoryView
    },
    {
      path: '/application',
      name: 'Application',
      component: CloneView
    },
    {
      path: '/voice',
      name: 'Voice',
      component: CloneVoiceView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    // Admin
    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      component: AdminDashboard
    },
    {
      path: '/admin/humanmodel',
      name: 'HumanModel',
      component: HumanModelView
    },
    {
      path: '/admin/speakermodel',
      name: 'SpeakerModel',
      component: SpeakerModelView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
