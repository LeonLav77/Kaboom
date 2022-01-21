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
  {
    path: '/game/:id',
    component: () => import('../Pages/Game.vue'),
    name: 'Game'
  },
  {
    path: '/test',
    component: () => import('../Pages/Hello.vue'),
    name: 'Hello'
  },
  {
    path: '/2PlayerTest',
    component: () => import('../Pages/2PlayerTest.vue'),
    name: '2PlayerTest'
  },
]

export default routes;
