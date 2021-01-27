<template>
  <div class="Personal">
    <!-- header -->
    <van-nav-bar :title="$t('Personal.title')" left-arrow @click-left="onClickLeft" />

    <div class="commonbox personaldatamsg">
      <div class="flex jc-sb aic touxiangbox van-hairline--bottom">
        <div class="f14 chui">{{$t('Personal.profile')}}</div>
        <div class="van-uploader">
          <div class="van-uploader__wrapper">
            <div class="van-uploader__input-wrapper">
              <div class="flex aic chui">
                <img src="../../static/img/txpic.00e8c08.png" alt="" />
                <i class="van-icon van-icon-arrow"></i>
              </div>
              <input type="file" accept="image/*" class="van-uploader__input" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex jc-sb aic touxiangbox van-hairline--bottom">
        <div class="f14 chui">{{$t('Personal.nickname')}}</div>

        <div class="flex aic chui">
          <div class="chuiName">234****5678</div>
          <i class="van-icon van-icon-arrow"></i>
        </div>
      </div>
      <div class="flex jc-sb aic touxiangbox">
        <div class="f14 chui">{{$t('Personal.mobile')}}</div>

        <div class="flex aic chui">
          <div class="chuiName">234****5678</div>
          <i class="van-icon van-icon-arrow"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personal",
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
.Personal {
  .commonbox {
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
  }
  .personaldatamsg {
    padding: 0 10px;
    .touxiangbox {
      .chui {
        width: 66%;
        .chuiName {
          width: 100%;
          height: 30px;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: right;
        }
      }
      height: 55px;
      img {
        width: 36px;
      }
    }
  }
}
</style>