<template>
  <ul class="footer flex jc-sa w100pc fixed bott0 bg-fff aic footer">
    <li
      class="item"
      v-for="(item, index) in footerList"
      :key="index"
      @click="toggleIem(index)"
      :class="{item1:index == 2}"
    >
      <router-link
        :to="item.path"
        aria-current="page"
        class="flex2 aic f20 yellow"
        :class="{active:index == current}"
      >
        <img :src="index == current?item.activeSrc:item.src" alt="" class="imgg" :class="{imgg1:index == 2}" />
        <p class="mt-5 f12 text">{{ item.name }}</p>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "footNav",
  data() {
    return {
      footNav: "Home",
      current: 0,
      footerList: [
        {
          path: "/index/Home",
          src: require("../static/img/Home.png"),
          activeSrc: require("../static/img/Home-active.png"),
          name: "Home",
        },
        {
          path: "/index/Service",
          src: require("../static/img/Service.png"),
          activeSrc: require("../static/img/Service-active.png"),
          name: "Service",
        },
        {
          path: "/index/Orders",
          src: require("../static/img/Orders.png"),
          activeSrc: require("../static/img/Orders.png"),
          name: "Orders",
        },
        {
          path: "/index/Records",
          src: require("../static/img/Records.png"),
          activeSrc: require("../static/img/Records-active.png"),
          name: "Records",
        },
        {
          path: "/index/Account",
          src: require("../static/img/Account.png"),
          activeSrc: require("../static/img/Account-active.png"),
          name: "Account",
        },
      ],
    };
  },
  methods: {
    toggleIem(index) {
      this.current = index;
    },
  },
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
    text-decoration: none;
  }
  .text {
    color: #797d82;
    text-align: center;
  }
}
</style>