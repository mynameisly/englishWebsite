<template>
  <div class="Link">
    <van-nav-bar title="Link" left-arrow @click-left="onClickLeft" />
    <div class="commonbox pd10">
      <p class="f12 chui">
        <span class="orange f14">Tip:</span>
        Please enter the correct personal information
      </p>
    </div>

    <div class="personaldatamain"></div>

    <div class="confirm">OK</div>
  </div>
</template>

<script>
export default {
  name: "Link",
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
.Link {
  height: 100vh;
  background: #f3f3f3;
  .commonbox {
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
    padding: 15px 10px;
    .chui {
      font-size: 12px;
      color: #8799a3;
      .orange {
        font-size: 14px;
        color: #ff5f16;
      }
    }
  }

  .confirm {
    font-size: 16px;
    width: 90%;
    line-height: 1rem;
    border: none;
    color: #fff;
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
</style>