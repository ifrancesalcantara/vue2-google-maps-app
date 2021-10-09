import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: 'localhost:8080',
    routes:[
        {
            path:'/',
            name: 'home',
            component: Main,
            props:true
        }
    ]
})