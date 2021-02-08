<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <!-- 一级菜单 -->
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>

                        <!-- 二级菜单 -->
                        <template v-for="subItem in item.subs">
                            <template v-if="subItem.desc">
                                <el-submenu :index="item.index" :key="subItem.index">
                                    <template slot="title">
                                        <i :class="subItem.icon"></i>
                                        <span slot="title">{{ subItem.title }}</span>
                                    </template>

                                    <!-- 三级菜单 -->
                                    <el-menu-item v-for="descItem in subItem.desc" :index="descItem.index" :key="descItem.index">
                                        <i :class="descItem.icon"></i>
                                        <span >{{ descItem.title }}</span>
                                    </el-menu-item>
                                </el-submenu>
                            </template>
                            <template v-else>
                                <el-menu-item :index="subItem.index" :key="subItem.index">
                                    <i :class="subItem.icon"></i>
                                    <span slot="title">{{ subItem.title }}</span>
                                </el-menu-item>
                            </template>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
import { getLoginEmployee } from '@/api/login'
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'dashboard',
                    title: '控制台'
                },
                {
                    icon: 'el-icon-lx-cascades',
                    index: 'normalManage',
                    title: '常规管理',
                    subs: [
                        {
                            icon: 'el-icon-lx-home',
                            index: 'systemConfig',
                            title: '系统配置'
                        },
                        {
                            icon: 'el-icon-lx-copy',
                            index: 'attachManage',
                            title: '附件管理'
                        },
                        {
                            icon: 'el-icon-lx-copy',
                            index: 'personalData',
                            title: '个人资料'
                        },
                    ]
                },
                {
                    icon: 'el-icon-lx-calendar',
                    index: 'sortManage', //TODO
                    title: '分类管理',
                    subs: [
                        {
                            icon: 'el-icon-lx-home',
                            index: 'memberLevelManage',
                            title: '会员等级管理'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-calendar',
                    index: 'authoManage',
                    title: '权限管理',
                    subs: [
                        {
                            icon: 'el-icon-lx-home',
                            index: 'adminManage',
                            title: '管理员管理'
                        },
                        {
                            icon: 'el-icon-lx-home',
                            index: 'adminLog',
                            title: '管理员日志'
                        },
                        {
                            icon: 'el-icon-lx-home',
                            index: 'roleGroup',
                            title: '角色组'
                        },
                        {
                            icon: 'el-icon-lx-home',
                            index: 'menuRule',
                            title: '菜单规则'
                        }
                    ]
                },
                {
                    icon: 'el-icon-s-shop',
                    index: 'plugManage',
                    title: '插件管理'
                },
                {
                    icon: 'el-icon-lx-redpacket_fill',
                    index: 'memberManage',
                    title: '会员管理',
                    subs: [
                        {
                            icon: 'el-icon-lx-home',
                            index: 'agentManage',
                            title: '代理管理'
                        },
                        {
                            icon: 'el-icon-lx-home',
                            index: 'salesmanManage',
                            title: '业务员管理'
                        },
                        {
                            icon: 'el-icon-lx-home',
                            index: 'member',
                            title: '会员管理',
                            desc: [
                                {
                                    icon: 'el-icon-lx-home',
                                    index: 'firstMember',
                                    title: '一级会员'
                                },
                                {
                                    icon: 'el-icon-lx-home',
                                    index: 'secondMember',
                                    title: '二级会员'
                                },
                                {
                                    icon: 'el-icon-lx-home',
                                    index: 'threeMember',
                                    title: '三级会员'
                                },
                                {
                                    icon: 'el-icon-lx-home',
                                    index: 'fourMember',
                                    title: '四级会员'
                                },
                                {
                                    icon: 'el-icon-lx-home',
                                    index: 'fiveMember',
                                    title: '五级会员'
                                },
                                {
                                    icon: 'el-icon-lx-home',
                                    index: 'totalMember',
                                    title: '全部'
                                },
                            ]
                        },
                        {
                            icon: 'el-icon-lx-home',
                            index: 'rechargeRecord',
                            title: '充值记录'
                        },
                        {
                            icon: 'el-icon-lx-home',
                            index: 'withdrawalRecord',
                            title: '提现记录'
                        },
                        {
                            icon: 'el-icon-lx-home',
                            index: 'financialRecords',
                            title: '理财记录'
                        }
                    ]
                }
            ]
        };
    },
    computed: {//员工管理、客房管理、客房查询、入住管理、客户服务、财务管理
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    },
    mounted() {
        this.getLoginEmployee()
    },
    methods: {
        getLoginEmployee() {
            getLoginEmployee().then(res => {
                if(res.data.code == 0){
                    // console.log('当前登录的菜单是',res.data.data.menus)
                    let menus = res.data.data.menus
                    for (let i = 0; i < menus.length; i++){
                        if(menus[i].title == '系统首页') {
                            menus[i].index = 'dashboard'
                            menus[i].icon = 'el-icon-lx-home'
                        } else if(menus[i].title == '员工管理') {
                            menus[i].index = 'employee'
                            menus[i].icon = 'el-icon-lx-cascades'
                        } else if(menus[i].title == '客房管理') {
                            menus[i].index = 'room'
                            menus[i].icon = 'el-icon-lx-copy'
                        } else if(menus[i].title == '客房查询') {
                            menus[i].index = 'searchroom'
                            menus[i].icon = 'el-icon-s-shop'
                        }else if(menus[i].title == '入住管理') {
                            menus[i].index = 'checkin'
                            menus[i].icon = 'el-icon-lx-global'
                        } else if(menus[i].title == '退房记录') {
                            menus[i].index = 'checkout'
                            menus[i].icon = 'el-icon-lx-emoji'
                        } else if(menus[i].title == '客户服务') {
                            menus[i].index = 'roomservice'
                            menus[i].icon = 'el-icon-lx-calendar'
                        } else if(menus[i].title == '财务管理') {
                            menus[i].index = 'finance'
                            menus[i].icon = 'el-icon-lx-redpacket_fill'
                        }
                    }
                    this.items = menus
                }
            })
        }
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 0px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
