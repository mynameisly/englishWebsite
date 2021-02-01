import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
          path: '/',
          redirect: '/login'
        },
        {
          path: '/',
          component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
          meta: { title: 'Home' },
          children: [
              {
                path: '/dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                meta: { title: '控制台' }
              },
              {
                path: '/normalManage',
                component: () => import(/* webpackChunkName: "icon" */ '../views/NormalManage/index'),
                meta: { title: '常规管理' }
              },
              {
                path: '/attachManage',
                component: () => import(/* webpackChunkName: "table" */ '../views/AttachManage/index'),
                meta: { title: '附件管理' }
              },
              {
                path: '/personalData',
                component: () => import(/* webpackChunkName: "tabs" */ '../views/PersonalData/index'),
                meta: { title: '个人资料' }
              },
              {
                path: '/sortManage',
                component: () => import(/* webpackChunkName: "form" */ '../views/SortManage/index'),
                meta: { title: '分类管理' }
              },
              // 分类管理的子路由开始
              {
                path: 'memberLevelManage',
                component: () => import(/* webpackChunkName: "form" */ '../views/SortManage/MemberLevelManage'),
                meta: { title: '会员等级管理' }
              },
              // 分类管理的子路由结束
              {
                path: '/authoManage',
                component: () => import(/* webpackChunkName: "form" */ '../views/AuthoManage/index'),
                meta: { title: '权限管理' }
              },
              // 权限管理的子路由开始
              {
                path: '/adminManage',
                component: () => import(/* webpackChunkName: "form" */ '../views/AuthoManage/AdminManage'),
                meta: { title: '管理员管理' }
              },
              {
                path: '/adminLog',
                component: () => import(/* webpackChunkName: "form" */ '../views/AuthoManage/AdminLog'),
                meta: { title: '管理员日志' }
              },
              {
                path: '/roleGroup',
                component: () => import(/* webpackChunkName: "form" */ '../views/AuthoManage/RoleGroup'),
                meta: { title: '角色组' }
              },
              {
                path: '/menuRule',
                component: () => import(/* webpackChunkName: "form" */ '../views/AuthoManage/MenuRule'),
                meta: { title: '菜单规则' }
              },
              // 权限管理的子路由结束
              {
                path: '/plugManage',
                component: () => import(/* webpackChunkName: "upload" */ '../views/PlugManage/index.vue'),
                meta: { title: '插件管理' }
              },
              {
                path: '/memberManage',
                component: () => import(/* webpackChunkName: "i18n" */ '../views/MemberManage/index'),
                meta: { title: '会员管理' }
              },
              // 会员管理的子路由开始
              {
                path: 'agentManage',
                component: () => import(/* webpackChunkName: "i18n" */ '../views/MemberManage/AgentManage'),
                meta: { title: '代理管理' }
              },
              {
                path: 'salesmanManage',
                component: () => import(/* webpackChunkName: "i18n" */ '../views/MemberManage/SalesmanManage'),
                meta: { title: '业务员管理' }
              },
              {
                path: 'member',
                component: () => import(/* webpackChunkName: "i18n" */ '../views/MemberManage/Member'),
                meta: { title: '会员管理' }
              },
              {
                path: 'rechargeRecord',
                component: () => import(/* webpackChunkName: "i18n" */ '../views/MemberManage/RechargeRecord'),
                meta: { title: '充值记录' }
              },
              {
                path: 'withdrawalRecord',
                component: () => import(/* webpackChunkName: "i18n" */ '../views/MemberManage/WithdrawalRecord'),
                meta: { title: '提现记录' }
              },
              {
                path: 'financialRecords',
                component: () => import(/* webpackChunkName: "i18n" */ '../views/MemberManage/FinancialRecords'),
                meta: { title: '理财记录' }
              }
              // 会员管理的子路由结束
          ]
        },
        {
          path: '/login',
          component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
          meta: { title: '登录' }
        },
        {
          path: '*',
          redirect: '/404'
        }
    ]
});
