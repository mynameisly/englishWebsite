<template>
  <div class="BankCard">
    <van-nav-bar
      title="Bank Card Management"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="wrapper">
      <div class="confirm" @click="addBackCard">Add</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankCard",
  data() {
    return {};
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    addBackCard() {
      this.$router.push({path: '/Link'})
    }
  },
};
</script>

<style lang="scss" scoped>
.BankCard {
  .wrapper {
    .confirm {
      font-size: 16px;
      width: 90%;
      line-height: 1rem;
      border: none;
      color: #fff;
      text-align: center;
      margin: 20px auto;
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#ff7a2d),
        to(#ff5201)
      );
      background-image: linear-gradient(180deg, #ff7a2d, #ff5201);
      border-radius: 0.13333rem;
    }
  }
}
</style>