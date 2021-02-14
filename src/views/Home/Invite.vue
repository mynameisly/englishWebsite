<template>
  <div class="Invite">
    <van-nav-bar :title="$t('Invite.title')" left-arrow @click-left="onClickLeft" />
    <div :class="en == 'en' ? 'en' : 'ind'">
      <div class="invitationimg">
        <button type="button" @click="copyShareLink">{{ $t('Invite.btn1') }}</button>
        <div class="qrbox">
          <img style="height: 148px; width: 148px" :src="qCodeUrl" alt="" />
          <div class="tac yaoqcode">
            00639Q
            <p class="f12">{{ $t('Invite.btn2') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invite",
  data() {
    return {
      qCodeUrl: "", //二维码图片地址
      en: "en", //英文包en 印度文包ind
    };
  },
  mounted() {
    this.getQcode();
  },
  methods: {
    getQcode() {
      // 获取二维码图片
      // let params = {};
      // this.fetchget(this.baseUrl+"/getQcode", params).then((res) => {
      //   if(res.code == 200) {
      //     this.qCodeUrl = res.qCodeUrl;
      //   }
      // })
    },
    copyShareLink() {
      // 复制分享链接
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.Invite {
  .ind {
    height: calc(100vh - 46px);
    background: url("../../static/img/download_hi.7137d3f.png") no-repeat top
      #ff851e;
    background-size: 100%;
  }
  .en {
    height: calc(100vh - 46px);
    background: url("../../static/img/download_en.a2d7e1e.png") no-repeat top
      #ff851e;
    background-size: 100%;
  }
  .invitationimg {
    padding-top: 45px;
    button {
      position: fixed;
      margin: auto;
      left: 0;
      right: 0;
      top: 575px;
      width: 338px;
      height: 70px;
      line-height: 10px;
      border: none;
      color: #fff;
      font-weight: 500;
      z-index: 999;
      max-width: 750px;
      font-size: 21px;
      background: url("../../static/img/InviteBtnBg.png");
      background-size: 100%;
    }
    .qrbox {
      position: fixed;
      margin: auto;
      left: 0;
      right: 0;
      top: 375px;
      width: 180px;
      height: 200px;
      border: none;
      color: #f78e48;
      font-weight: 600;
      border-radius: 8px;
      z-index: 999;
      max-width: 750px;
      background: #fff;
      img {
        display: block;
      }
      .yaoqcode {
        // width: 150px;
        text-align: center;
        p {
          line-height: 20px;
          color: #929292;
          font-size: 12px;
        }
      }
    }
  }
}
</style>