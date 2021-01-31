import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomePage = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/HomePage');

const Home = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Home');
const Login = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Login');
const BackgroundCenter = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/BackgroundCenter');
const PaymentOrder = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/PaymentOrder');
const WithdrawalOrder = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/WithdrawalOrder');
const MemberManagement = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/MemberManagement');
const FinancialRecords = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/FinancialRecords');
const PersonalData = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/PersonalData');
const ChangePwd = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/ChangePwd');
const Logout = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Logout');

const routes = [{
	path: '/',
	redirect: '/Login',
},
// 主页面

{
	path: '/index',
	name: 'HomePage',
	explain: '主页面',
	component: HomePage,
	redirect: '/index/Home',
	children: [
		{
			path: 'Home',
			name: 'Home',
			explain: 'Home',
			component: Home,
			redirect: '/BackgroundCenter',
			children: [
				{
					path: '/BackgroundCenter',
					name: 'BackgroundCenter',
					explain: '后台中心',
					component: BackgroundCenter
				},
				{
					path: '/PaymentOrder',
					name: 'PaymentOrder',
					explain: '支付订单',
					component: PaymentOrder
				},
				{
					path: '/WithdrawalOrder',
					name: 'WithdrawalOrder',
					explain: '提现订单',
					component: WithdrawalOrder
				},
				{
					path: '/MemberManagement',
					name: 'MemberManagement',
					explain: '会员管理',
					component: MemberManagement
				},
				{
					path: '/FinancialRecords',
					name: 'FinancialRecords',
					explain: '理财记录',
					component: FinancialRecords
				},
				{
					path: '/PersonalData',
					name: 'PersonalData',
					explain: '个人资料',
					component: PersonalData
				},
				{
					path: '/ChangePwd',
					name: 'ChangePwd',
					explain: '修改密码',
					component: ChangePwd
				},
				{
					path: '/Logout',
					name: 'Logout',
					explain: '退出',
					component: Logout
				},
			]
		}
	]
},
{
	path: '/Login',
	name: 'Login',
	explain: '登录',
	component: Login
},
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router