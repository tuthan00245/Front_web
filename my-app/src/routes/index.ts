import Home from '../pages/Home/Home';


const publicRouter = [
    {path: '/', component: Home},
    {path: '/products', component: Home},
]
const restrictRoutes = [
    {path: '/', component: Home},

    // { path: '/account/login', component: Login },
    // { path: '/account/signup', component: Register },
];
export { publicRouter, restrictRoutes };