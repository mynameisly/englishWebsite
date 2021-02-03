<template>
  <div class="Aside">
    <div class="sidebar-toggle" style="display:none"><i class="fa fa-bars"></i></div>
    <div class="sidenav" id="sidebar-nav">
      <ul class="list-group">
        <li class="list-group-heading">业务后台</li>
        <li class="list-group-item" v-for="(item,index) in menuList" :key="index" @click="toggleMenu(index)" :class="{active: index === current}">
          <router-link :to="item.path"
            ><i class="fa fa-fw" :class="item.icon"></i>{{item.name}}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      current: 0,
      menuList: [
        {
          path: '/BackgroundCenter',
          name: '后台中心',
          icon: 'fa-user-circle'
        },
        {
          path: '/PaymentOrder',
          name: '支付订单',
          icon: 'fa-user-circle'
        },
        {
          path: '/WithdrawalOrder',
          name: '提现订单',
          icon: 'fa-user-circle'
        },
        {
          path: '/MemberManagement',
          name: '会员管理',
          icon: 'fa-user-circle'
        },
        {
          path: '/FinancialRecords',
          name: '理财记录',
          icon: 'fa-user-circle'
        },
        {
          path: '/PersonalData',
          name: '个人资料',
          icon: 'fa-user-o'
        },
        {
          path: '/ChangePwd',
          name: '修改密码',
          icon: 'fa-key'
        },
        {
          path: '/Logout',
          name: '退 出',
          icon: 'fa-sign-out'
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    toggleMenu(index) {
      this.current = index;
    }
  },
};
</script>

<style scoped lang="scss">
.Aside {
  .sidenav {
    padding: 20px 0 10px 0;
    margin-bottom: 20px;
    background-color: #fff;
    .list-group {
      .list-group-heading {
        list-style-type: none;
        color: #919191;
        margin-bottom: 10px;
        margin-left: 35px;
        font-size: 14px;
      }
      .list-group-item {
        border-radius: 0;
        background-clip: padding-box;
        border: none;
        position: relative;
        display: block;
        background-color: #fff;
        > a {
          padding: 10px 15px 10px 35px;
          color: #616161;
          font-size: 13px;
          text-decoration: none;
        }
      }
      .list-group-item.active {
        border-left: 2px solid #46c37b;
        background-color: rgba(245, 245, 245, 0.38);
        a {
          color: #46c37b;
        }
      }
    }
    .list-group:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
