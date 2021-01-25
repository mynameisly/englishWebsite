import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Login');
const Register = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Register');
const HomePage = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/HomePage');
// Home
const Home = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Home');
const Shoppers = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Shoppers');
const ShoppingAssistant = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/ShoppingAssistant');
const Recharge = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Recharge');
const Link = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Link');

// Service
const Service = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Service/Service');

// Orders
const Orders = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Orders/Orders');

// Records
const Records = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Records/Records');

// Account
const Account = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/Account');





// 测试页
const Test = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Test');

const routes = [{
	path: '/',
	redirect: '/index',
},
// 主页面
{
	path: '/index',
	name: 'HomePage',
	explain: '主页面',
	component: HomePage,
	redirect: '/index/Home',
	children: [{
		path: 'Home',
		name: 'Home',
		explain: 'Home',
		component: Home
	},
	{
		path: 'Service',
		name: 'Service',
		explain: 'Service',
		component: Service
	},
	{
		path: 'Orders',
		name: 'Orders',
		explain: 'Orders',
		component: Orders
	},
	{
		path: 'Records',
		name: 'Records',
		explain: 'Records',
		component: Records
	},
	{
		path: 'Account',
		name: 'Account',
		explain: 'Account',
		component: Account
	},
	{
		path: 'Link',
		name: 'Link',
		explain: 'Link a Bank Account',
		component: Link
	},
	]
},
// 登录页面
{
	path: '/login',
	name: 'Login',
	explain: '登录页面',
	component: Login
},
// 注册页面
{
	path: '/register',
	name: 'Register',
	explain: '注册页面',
	component: Register
},

//#region Home
{
	path: '/Shoppers',
	name: 'Shoppers',
	explain: 'The Shoppers',
	component: Shoppers
},
{
	path: '/ShoppingAssistant',
	name: 'ShoppingAssistant',
	explain: 'Shopping Assistant',
	component: ShoppingAssistant
},
{
	path: '/Recharge',
	name: 'Recharge',
	explain: 'Recharge',
	component: Recharge
},
//#endregion



// 测试页（例如框架控件不生效测试等）
{
	path: '/Test',
	name: 'Test',
	explain: '本文件仅供测试',
	component: Test
}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router