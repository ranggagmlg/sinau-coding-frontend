import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWord from "./components/HelloWorld.vue"
import HaiDunia from "./components/HaiDunia.vue"

// registrasi vue router
Vue.use(VueRouter)

// deklarasi router
const routes = [{
    path: '/',
    component: HelloWord
}, {
    path: '/hai',
    component: HaiDunia
    
}];

const router = new VueRouter({
    routes: routes
});

export default router;