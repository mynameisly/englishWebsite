<template>
  <div class="CheckIn">
    <!-- header -->
    <div class="header">
      <van-icon name="arrow-left" size="20" @click="onClickLeft" />
      <span class="title">{{$t('CheckIn.title')}}</span>
      <span></span>
    </div>

    <div class="qiandao">
      <div class="fff">
        <p class="p1">
          <img src="../../static/img/Account/checkin.png" alt="" />
          &nbsp; {{$t('CheckIn.check')}}
        </p>
        <span> {{$t('CheckIn.checked')}}</span>
      </div>
    </div>

    <div class="content">
      <div class="wrapper">
        <div class="title">{{$t('CheckIn.checkinRules')}}</div>
        <div class="text">
          {{$t('CheckIn.text')}}
        </div>
      </div>
    </div>

    <div class="confirm" @click="checkin">{{$t('CheckIn.btn')}}</div>
  </div>
</template>

<script>
export default {
  name: "CheckIn",
  data() {
    return {};
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    checkin() {
      // 发送请求
      // let params = {};
      // this.fetchget("/api/checkin", params).then((res) => {
      //   if (res.code == 200) {
      //   }
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.CheckIn {
  .header {
    width: 100%;
    display: flex;
    line-height: 1.2rem;
    align-items: center;
    justify-content: space-between;
    background: -webkit-linear-gradient(left, #ff743d, #ff9e69);
    background: linear-gradient(90deg, #ff743d, #ff9e69);
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 0;
    padding: 0 10px;
    .title {
      font-size: 16px;
    }
  }

  .qiandao {
    padding-top: 45px;
    background: linear-gradient(90deg, #ff743d, #ff9e69);
    height: 252px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    div {
      margin-top: 50px;
      text-align: center;
      p {
        border-radius: 30px;
        border: 2px solid #fff;
        padding: 8px 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        img {
          width: 20px;
          height: 18px;
          margin-right: 8px;
        }
      }
      span {
        font-size: 14px;
        color: #fff;
      }
    }
  }

  .content {
    padding: 14px;
    margin-top: -60px;
    .wrapper {
      background: #fff;
      padding: 15px 26px 26px;
      border-radius: 8px;
      .title {
        color: #333;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 20px;
      }
      .text {
        font-size: 12px;
        font-weight: 500;
        color: #666;
        line-height: 22px;
      }
    }
  }

  .confirm {
    font-size: 16px;
    width: 90%;
    line-height: 1rem;
    border: none;
    color: #fff;
    text-align: center;
    margin: 20px auto;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#ff7a2d),
      to(#ff5201)
    );
    background-image: linear-gradient(180deg, #ff7a2d, #ff5201);
    border-radius: 0.13333rem;
  }
}
</style>