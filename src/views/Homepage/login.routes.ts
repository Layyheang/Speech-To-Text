import type { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw>=[
    {
        path: '/login',
        name: 'login',
        component: ()=>import('./HomePage.vue'),
        // meta:{
        //     isCleanLayout = true
        // }
    }
]
export default routes;