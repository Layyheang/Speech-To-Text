import type { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw>=[
    {
        path: '/homepage',
        name: 'homepage',
        component: ()=>import('./HomePage.vue'),
       
    }

]

export default routes;