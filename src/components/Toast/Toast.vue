<template>
  <div class="toast">
    <div class="box" v-show="isShow" :style="{'background-color':backgroundColor}">
      <span>{{ title }}</span>
      <i class="fa fa-times"></i>
    </div>
  </div>
</template>

<script>
/**
 * backgroundColor: 弹框背景颜色
 * title: 弹框标题
 * duration: 弹框存在时间(单位：秒s)
 */
export default {
  name: "Toast",
  data() {
    return {
      title: "",
      isShow: false,
      backgroundColor: "",
    };
  },
  methods: {
    show(title, backgroundColor) {
      this.isShow = true;
      this.title = title;
      this.backgroundColor = backgroundColor;
      setTimeout(() => {
        this.isShow = false;
        this.title = "";
        this.backgroundColor = "transparent";
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.toast {
  .box {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    width: 240px;
    height: 50px;
    line-height: 50px;
    border-radius: 2px;
    position: fixed;
    top: 10%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%, -50%);
    opacity: 0.8;
    text-align: center;
    color: #fff;
  }
}
</style>