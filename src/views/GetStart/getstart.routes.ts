import type { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw>=[
    {
        path: '/vioce',
        name: 'getstart',
        component: ()=>import('./Getstart.vue'),
    }

]
export default routes;