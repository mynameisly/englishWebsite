<template>
  <div class="Language">
    <!-- header -->
    <van-nav-bar :title="$t('Language.title')" left-arrow @click-left="onClickLeft" />

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
      this.radio = '1';
      // this.$i18n.locale = 'en';
    },
    india() {
      this.radio = '2';
      // this.$i18n.locale = 'ind';
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