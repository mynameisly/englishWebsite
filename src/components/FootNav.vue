<template>
  <ul class="footer flex jc-sa w100pc fixed bott0 bg-fff aic footer">
    <!-- <li class="item" v-for="(item, index) in footerList" :key="index" @click="toggleIem(item)">
      <router-link
        :to="item.path"
        aria-current="page"
        class="flex2 aic f20 yellow router-link-exact-active active"
        >
        <img :src="item.src" alt="" class="imgg" />
        <p class="mt-5 f12 text">{{item.name}}</p>
        </router-link>
    </li> -->
    <li class="item">
      <router-link
        to="/index/Home"
        aria-current="page"
        class="flex2 aic f20 yellow router-link-exact-active active"
        >
        <img src="../static/img/Home-active.png" alt="" class="imgg" />
        <p class="mt-5 f12 text">Home</p>
        </router-link>
    </li>
    <li class="item">
      <router-link to="/index/Service" class="flex2 aic f20 text">
        <img src="../static/img/Servive.png" alt="" class="imgg" />
        <p class="mt-5 text f12">Service</p></router-link
      >
      <div id="tbox"></div>
    </li>
    <li class="item item1">
      <router-link to="/index/Orders" class="flex2 aic f20 text">
        <img src="../static/img/Orders.png" alt="" class="imgg imgg1" />
        <p class="mt-5 text f12">Orders</p></router-link
      >
      <div id="tbox"></div>
    </li>
    <li class="item">
      <router-link to="/index/Records" class="flex2 aic f20 text">
        <img src="../static/img/Records.png" alt="" class="imgg" />
        <p class="mt-5 text f12">Records</p></router-link
      >
    </li>
    <li class="item">
      <router-link to="/index/Account" class="flex2 aic f20 text">
        <img src="../static/img/Account.png" alt="" class="imgg" />
        <p class="mt-5 text f12">Account</p></router-link
      >
    </li>
  </ul>
</template>
<script>
export default {
  name: "footNav",
  data() {
    return {
      footNav: "Home",
    //   footerList: [
    //       {
    //           path: '/index/Home',
    //           src: '../static/img/Home-active.png',
    //           name: 'Home'
    //       }
    //   ]
    };
  },
  methods: {
      toggleIem(item){
          
      }
  }
};
</script>
<style lang="scss">
.footer {
  height: 79px;
  position: fixed;
  bottom: 0;
  width: 100%;
  bottom: -2px;
  z-index: 1;
  background: url(../static/img/footerBg.png) no-repeat top;
  background-size: cover;
  .item {
    margin-top: 25px;
    width: 20%;
  }
  .item1 {
    margin-top: 0;
  }
  .imgg {
    width: 20px;
  }
  .imgg1 {
    width: 45px;
  }
  .active .text {
    color: #ff5200;
  }
  .text {
    color: #797d82;
    text-align: center;
  }
}
</style>