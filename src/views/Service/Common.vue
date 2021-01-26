<template>
  <div class="Common">
    <van-nav-bar title="Common Problem" left-arrow @click-left="onClickLeft" />
    <div class="wrapper">
      <p>
        1.Please contact recharging customer service forrecharging problem,
        withdrawal problem and bankcard information change
      </p>

      <p>
        2.To receive benefits and event rewards, pleasecontact the event welfare
        customer service to learnabout platform activities
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Common",
  data() {
    return {};
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.Common {
  .wrapper {
    border-top: 1px solid #f5f5f5;
    padding: 16px;
    position: absolute;
    top: 45px;
    width: 100%;
    height: calc(100% - 45px);
    background-color: #fff;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    p{
      font-size: 16px;
    }
  }
}
</style>