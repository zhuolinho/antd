export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/experiment' },
      {
        path: '/experiment',
        name: 'experiment',
        component: 'Experiment',
      },
      {
        path: '/home',
        name: 'home',
        component: './Home',
      },
      {
        path: '/lab',
        name: 'lab',
        component: './Lab',
      },
      {
        path: '/course',
        name: 'course',
        routes: [
          { path: '/course', redirect: '/course/list' },
          { path: '/course/list', component: 'Course' },
          {
            path: '/course/course1',
            component: 'Course/Course1',
          },
          {
            path: '/course/course2',
            component: 'Course/Course2',
          },
          {
            path: '/course/course3',
            component: 'Course/Course3',
          },
          {
            path: '/course/course4',
            component: 'Course/Course4',
          },
        ],
      },
      {
        path: '/about',
        name: 'about',
        component: './About',
      },
      {
        path: '/statistics',
        name: 'statistics',
        // authority: ['admin'],
        component: 'Statistics/Analysis',
      },
      {
        icon: 'warning',
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
