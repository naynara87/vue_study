import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';
import E404 from './components/404.vue';

const routes = [
    {
        path: '/detail/:id(\\d+)',
        component: Detail,
        children: [
            {
                path:"author",
                component: Author,
            },
            {
                path:"comment",
                component: Comment,
            },
        ]
    },
    {
        path: '/list',
        component: List,
    },
    {
        path: '/',
        component: Home,
    },
    {
        path: '/:anything(.*)',
        component: E404,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 