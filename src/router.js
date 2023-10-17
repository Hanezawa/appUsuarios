import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from './components/loginForm.vue'
import RegisterForm from './components/registerForm.vue'
import Dashboard from './components/dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'loginForm',
    component: LoginForm
  },
  {
    path: '/register',
    name: 'registerForm',
    component: RegisterForm
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
