export default [
	{
		path: '/login',
		name: 'LoginPage',
		component: () => import('@/views/LoginPage.vue'),
	},
	{
		path: '/signup',
		name: 'SignupPage',
		component: () => import('@/views/SignupPage.vue'),
	},
];
