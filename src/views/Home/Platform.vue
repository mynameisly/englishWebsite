<template>
  <div class="Platform">
    <van-nav-bar
      :title="$t('Platform.title')"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="wrapper">
      <p>
        {{ content }}
      </p>
      <!-- <p>{{ $t('Platform.content.p1') }}</p>
      <p v-html="$t('Platform.content.p2')"></p>
      <p>{{ $t('Platform.content.p3') }}</p>
      <p>{{ $t('Platform.content.p4') }}</p>
      <p>{{ $t('Platform.content.p5') }}</p>
      <p v-html="$t('Platform.content.p6')"></p>
      <p v-html="$t('Platform.content.p7')"></p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Platform",
  data() {
    return {
      content: ""
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    init() {
      console.log('enter')
      let params = {
        id: 3
      };
      params = this.formDataObject(params)
      this.fetchget(this.baseUrl+"/single/info", params).then((res) => {
        console.log("Platform res", res);
        if (res.status === 0) {
          this.$toast(res.info);
        } else {
          this.content = res.data.Contents;
        }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.Platform {
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
    p {
      text-indent: 20px;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>