<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "APP",
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style lang="scss">
* {
  font-size: 12px;
  box-sizing: border-box;
}
#id {
  background: #f3f3f3;
  font-size: 16px !important;
  font-family: Noto Sans SC;
}
.aic {
  align-items: center;
}
.jc-sa {
  justify-content: space-around;
}
.jc-sb {
  justify-content: space-between;
}
.f18 {
  font-size: 18px;
}
.f14 {
  font-size: 14px;
}
.fw7 {
  font-weight: 700;
}
.hl20 {
  line-height: 20px;
}
.hl20 {
  line-height: 20px;
}
.mt-5 {
  margin-top: 5px;
  height: 15px;
}
.flex {
  display: flex;
}
.f20 {
  font-size: 20px;
}
.aic {
  align-items: center;
}
.fcc,
.flex2 {
  display: flex;
}
.flex2 {
  flex-direction: column;
}
.mt-5 {
  margin-top: 5px;
  height: 15px;
}
.f12 {
  font-size: 12px;
}
.fff {
    color: #fff;
}

// 滚动条样式
.score::-webkit-scrollbar {
  width: 3px;
  height: 400px;
}

.score::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.1);
}

.score::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
