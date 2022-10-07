import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import accountRoutes from './accounts';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
	...accountRoutes,
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
