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
// body {
//   padding-top: 50px;
//   margin: 0;
//   font-size: 13px;
//   background: #f4f6f8;
//   height: 100%;
//   min-height: 100%;
//   font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
//   line-height: 1.42857143;
//   color: #333333;
//   font-weight: 400;
//   overflow-x: hidden;
//   overflow-y: auto;
// }
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
