import { createRouter, createWebHistory } from "vue-router";
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import SwiftList from '../views/TableView.vue'


const routes = [
    {
        path: '/',
        name: 'SignIn',
        component: SignIn
        
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/swift-list',
        name: 'SwiftList',
        component: SwiftList
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router