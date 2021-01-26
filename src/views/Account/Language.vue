<template>
  <div class="Language">
    <!-- header -->
    <van-nav-bar title="Language" left-arrow @click-left="onClickLeft" />

    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="English" clickable @click="english">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="भारत गणराज्य" clickable @click="india">
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>

<script>
export default {
  name: "Language",
  data() {
    return {
      radio: '1'
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    english() {
      this.radio = '1'
      // 发送请求
      // let params = this.radio;
      // this.fetchget("/api/english", params).then((res) => {
      //   if (res.code == 200) {
          
      //   }
      // });
    },
    india() {
      this.radio = '2'
      // 发送请求
      // let params = this.radio;
      // this.fetchget("/api/india", params).then((res) => {
      //   if (res.code == 200) {
          
      //   }
      // });
    }
  },
};
</script>

<style lang="scss" scoped>
.Language {
  .aic {
    align-items: center;
  }
  .jc-sb {
    justify-content: space-between;
  }
  .flex {
    display: flex;
  }
  .f14 {
    font-size: 15px;
  }
  .personaldatamsg {
    background: #fff;
    padding: 0 10px;
    .touxiangbox {
      height: 55px;
    }
  }
  .commonbox {
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
  }
}
</style>