import { createRouter, createWebHistory } from "vue-router";
import routes from './config'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
    return
  }
  let user = JSON.parse(localStorage.getItem('user'))
  if (user && user.userName && user.pwd) {
    next()
    return
  }
  next('/login')
})
export default router;
