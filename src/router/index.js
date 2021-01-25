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
const Invite = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Invite');
const Rules = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Rules');
const Cooperative = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Cooperative');
const Platform = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Platform');
const Video = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Video');

// Service
const Service = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Service/Service');

// Orders
const Orders = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Orders/Orders');

// Records
const Records = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Records/Records');

// Account
const Account = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/Account');
const Personal = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/Personal');
const Direct = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/Direct');
const Activity = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/Activity');
const System = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/System');
const Safety = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/Safety');
const ChangePwd = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/ChangePwd');
const SetWithdrawalPwd = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/SetWithdrawalPwd');




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
{
	path: '/Link',
	name: 'Link',
	explain: 'Link a Bank Account',
	component: Link
},
{
	path: '/Invite',
	name: 'Invite',
	explain: 'Invite Friends',
	component: Invite
},
{
	path: '/Rules',
	name: 'Rules',
	explain: 'Platform Rules',
	component: Rules
},
{
	path: '/Cooperative',
	name: 'Cooperative',
	explain: 'Cooperative Agent',
	component: Cooperative
},
{
	path: '/Platform',
	name: 'Platform',
	explain: 'Platform Introduction',
	component: Platform
},
{
	path: '/Video',
	name: 'Video',
	explain: 'Video Guide',
	component: Video
},
//#endregion

//#region Account
{
	path: '/Personal',
	name: 'Personal',
	explain: 'Personal Info',
	component: Personal
}, 
{
	path: '/Direct',
	name: 'Direct',
	explain: 'Direct Subordinate',
	component: Direct
},
{
	path: '/Activity',
	name: 'Activity',
	explain: 'Activity Center',
	component: Activity
},
{
	path: '/System',
	name: 'System',
	explain: 'System Message',
	component: System
}, 
{
	path: '/Safety',
	name: 'Safety',
	explain: 'Safety Management',
	component: Safety
}, 
{
	path: '/ChangePwd',
	name: 'ChangePwd',
	explain: 'Change Login Password',
	component: ChangePwd
}, 
{
	path: '/SetWithdrawalPwd',
	name: 'SetWithdrawalPwd',
	explain: 'Set Withdrawal Password',
	component: SetWithdrawalPwd
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