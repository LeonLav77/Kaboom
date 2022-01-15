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
    path: '/Lobby/:id',
    component: () => import('../Pages/Lobby.vue'),
    name: 'Lobby'
  },
]

export default routes;
