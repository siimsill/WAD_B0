import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue';
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import auth from "../auth";
import PostView from "@/views/PostView.vue";




const routes = [{
        path: "/",
        name: "home",
        component: HomePage,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/login",
        name: "LogIn",
        component: LogIn,
    },
    {
        path: "/contact",
        name: "Contact",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/post/:id",
        name: "PostView",
        component: PostView,
        beforeEnter: async (to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login');
            } else {
                next();
            }
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;