<template>
  <div class="Records">
    <div class="recordBox">
      <div class="harder">
        <p class="harder-title">Order Records</p>
      </div>
      <div class="recordCont">
        <van-tabs v-model="activeName" @change="changeItem">
          <van-tab title="Pending" name="a">No More Records</van-tab>
          <van-tab title="Completed" name="b">No More Records</van-tab>
          <van-tab title="Frozen" name="c">No More Records</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Records",
  data() {
    return {
      activeName: "a",
    };
  },
  created() {},
  methods: {
    changeItem() {},
  },
};
</script>

<style lang="scss" scoped>
.Records {
  .recordBox {
    background: url("../../static/img/jl_bg.0296292.png") no-repeat top;
    background-size: 100%;
    min-height: 100vh;
    .harder-title {
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      padding: 40px 20px 5px;
    }
    .recordCont {
      padding-bottom: 70px;
      text-align: center;
      color: #969799;
      font-size: 14px;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>