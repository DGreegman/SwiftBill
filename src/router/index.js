import { createRouter, createWebHistory } from "vue-router";
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import SwiftList from '../components/TableView.vue'


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
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router