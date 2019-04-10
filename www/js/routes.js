routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/home/',
    url: './pages/home.html',
  },
  {
    path: '/messages/',
    url: './pages/messages.html',
  },
  {
    path: '/groups/',
    url: './pages/groups.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
