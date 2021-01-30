import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Login');
const SignUp = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/SignUp');
const ForgottenPwd = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/ForgottenPwd');
const HomePage = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/HomePage');

// Home
const Home = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Home');
const ShopRecords = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/ShopRecords');
const ShoppingAssistant = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/ShoppingAssistant');
const Recharge = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Recharge');
const Link = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Link');
const Withdrawal = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Withdrawal');
const Invite = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Invite');
const Rules = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Rules');
const Cooperative = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Cooperative');
const Platform = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Platform');
const Video = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Home/Video');

// Service
const Service = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Service/Service');
const Common = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Service/Common');

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
const BankCard = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/BankCard');
const Address = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/Address');
const AddAddress = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/AddAddress');
const Setting = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/Setting');
const Language = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/Language');
const CheckIn = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/CheckIn');
const Balance = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/Balance');
const AccountHis = () => import( /* webpackChunkname:"vipProfitAndLoss" */ '@vie/Account/AccountHis');



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
	explain: 'Login',
	component: Login
},
{
	path: '/ForgottenPwd',
	name: 'ForgottenPwd',
	explain: 'Forgotten Password',
	component: ForgottenPwd
},
{
	path: '/SignUp',
	name: 'SignUp',
	explain: 'SignUp',
	component: SignUp
},

//#region Home
{
	path: '/ShopRecords',
	name: 'ShopRecords',
	explain: 'The ShopRecords',
	component: ShopRecords
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
	path: '/Withdrawal',
	name: 'Withdrawal',
	explain: 'Withdrawal',
	component: Withdrawal
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


//#region Service
{
	path: '/Common',
	name: 'Common',
	explain: 'Common Problem',
	component: Common
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
{
	path: '/BankCard',
	name: 'BankCard',
	explain: 'Bank Card Management',
	component: BankCard
},
{
	path: '/Address',
	name: 'Address',
	explain: 'Address Management',
	component: Address
},
{
	path: '/AddAddress',
	name: 'AddAddress',
	explain: 'Add The Address',
	component: AddAddress
},
{
	path: '/Setting',
	name: 'Setting',
	explain: 'Setting',
	component: Setting
},
{
	path: '/Language',
	name: 'Language',
	explain: 'Language',
	component: Language
},
{
	path: '/CheckIn',
	name: 'CheckIn',
	explain: 'Daily Check-In',
	component: CheckIn
},
{
	path: '/Balance',
	name: 'Balance',
	explain: 'Balance',
	component: Balance
},
{
	path: '/AccountHis',
	name: 'Account History',
	explain: 'Balance',
	component: AccountHis
},
//#endregion

]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router