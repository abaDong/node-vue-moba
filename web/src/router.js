import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Article from './views/Article.vue'
import Hero from './views/Hero.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Main',
            component: Main,
            children: [
                { path: '/', name: 'Home', component: Home },
                { path: '/articles/:id', name: 'Article', component: Article, props: true },
            ]
        },
        { path: '/heroes/:id', name: 'Hero', component: Hero, props: true },
    ]
})