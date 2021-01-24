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
</style>
