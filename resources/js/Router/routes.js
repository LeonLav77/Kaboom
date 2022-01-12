const routes = [
  {
    path: '',
    component: () => import('../Pages/Home.vue'),
    name: 'home'
  },
  {
    path: '/about',
    component: () => import('../Pages/About.vue'),
    name: 'about'
  },
  {
    path: '/game',
    component: () => import('../Pages/Game.vue'),
    name: 'Game'
  },
]

export default routes;
