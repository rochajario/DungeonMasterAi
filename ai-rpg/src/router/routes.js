export const privateRoutes = [
  {
    path:'',
    name:'protectedRoutes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Start a new Adventure',
        icon: 'mdi-account-star-outline',
        path: '',
        component: () => import('pages/CharacterInformationPage.vue')
      },
      {
        name: 'Adventure',
        icon: 'mdi-book-open-page-variant-outline',
        path: '/adventure',
        component: () => import('pages/AdventurePage.vue')
      }
    ]
  }
]

const routes = [...privateRoutes];
export default routes
