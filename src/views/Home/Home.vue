<template>
  <div class="Home">
    <van-nav-bar
      title="Home"
      left-text
      right-text
      fixed
    >
    </van-nav-bar>
    <!-- 轮播图 -->
    <div class="banners">
      <van-swipe class="imgWrapper" :autoplay="3000">
        <van-swipe-item v-for="(item, index) in imagesArr" :key="index">
          <a :href="item.homePicLinkUrl">
            <img :src="item.homePicUrl" />
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 选项组 -->
    <div class="home-menu">
      <van-grid :column-num="5">
        <van-grid-item @click="goLotteryCenter">
          <img src="../../assets/images/caidan2.png" alt />
          <p>彩票中心</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../../assets/images/chongzhi.png" alt />
          <p>充值</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../../assets/images/tixian.png" alt />
          <p>提现</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../../assets/images/zhuanzhang.png" alt />
          <p>转账</p>
        </van-grid-item>
        <van-grid-item>
          <img src="../../assets/images/kefu.png" alt />
          <p>客服中心</p>
        </van-grid-item>
      </van-grid>
    </div>
    
    

  </div>
</template>

<script>
import Config from "@/utils/config.js";
export default {
  name: "Home",
  data() {
    return {
      imagesArr: [],
      myLotteries: [],
      hotlotteryList: [],
      thirdGameList: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      // this.getSysConfig();
      // this.getHomePic();
    },
    /** 获取系统配置 */
    getSysConfig() {
      let params = {};
      this.fetchget("/api/getSysConfig", params).then(res => {
        if (res.code == 200) {
          let lotteries = res.data.lotteries;
          // 我的彩种
          this.myLotteries = [];
          for (let i = 0; i < 3; i++) {
            this.myLotteries.push(lotteries["1"][i]);
          }
          // 设置彩票图标
          this.setIcon(this.myLotteries);
          // 热门彩种
          this.hotlotteryList = lotteries[2];
          // 设置彩票图标
          this.setIcon(this.hotlotteryList);
          // 真人体育
          this.thirdGameList = [];
          res.data.platforms.forEach(element => {
            var tmp = this.allThird.filter(item => item.name == element.name);
            if (tmp.length > 0) {
              this.thirdGameList.push(tmp[0]);
            }
          });

          // 提交作为全局数据
          this.$store.commit("setValue", {
            lotteries: res.data.lotteries
          });

          console.log(this.$store);
        }
      });
    },
    getHomePic() {
      let params = {
        picType: 1
      };
      this.fetchget("/api/getHomePicApp", params).then(res => {
        if (res.code == 200) {
          this.imagesArr = res.data.homePics;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  font-size: 40px;
  color: #36aef7;
}
.icon2 {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  font-size: 40px;
  color: #36aef7;
}
.icon-color0 {
  color: #ed725b;
}
.icon-color1 {
  color: #f0b376;
}
.icon-color2 {
  color: #539eed;
}
.icon-color3 {
  color: #947fef;
}
.icon-color4 {
  color: #5ae484;
}
.icon-color5 {
  color: #f36969;
}

.Home {
  padding-top: 1.2rem;
  box-sizing: border-box;
  height: 100vh;
  // padding-bottom: 50px;
  .headset,
  .conversation {
    font-size: 26px;
    margin-left: 5px;
  }
  .banners {
    // margin-top: 46px;
    .imgWrapper {
      .van-swipe-item {
        img {
          height: 128.5px;
        }
      }
    }
  }
  .home-menu {
    img {
      width: 42px;
      height: 42px;
    }
    p {
      margin-top: 6px;
      color: #333;
    }
  }
  .mylottery {
    .mylottery-title {
      display: flex;
      flex-wrap: wrap;
      .van-row {
        width: 100%;
        height: 34px;
        line-height: 34px;
        background: #fff;
        margin-top: 15px;
        div:nth-child(1) {
          font-weight: bold;
        }
        div:nth-child(2) {
          color: #919191;
        }
      }
    }
    .mylottery-body {
      display: flex;
      justify-content: space-around;
      text-align: center;
      background: #fff;
      padding-bottom: 12px;
      .body-wrapper {
        width: 30%;
        padding: 8px 0;
        border-radius: 8px;
        background: #f5f5f5;
        .img-wrapper {
          background: #e6e8f3;
          border: 2px solid #fff;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          margin: 0 auto;
          line-height: 60px;
          img {
            border-radius: 50%;
            width: 55px;
            height: 55px;
          }
        }
        p {
          margin-top: 7.2px;
        }
      }
    }
  }

  .hotlottery {
    .hotlottery-title {
      display: flex;
      flex-wrap: wrap;
      .van-row {
        width: 100%;
        height: 34px;
        line-height: 34px;
        background: #fff;
        margin-top: 15px;
        div:nth-child(1) {
          font-weight: bold;
        }
        div:nth-child(2) {
          color: #919191;
        }
      }
    }
    .hotlottery-body {
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      .body-wrapper {
        width: 50%;
        padding: 5px;
        .hotlottery-body-main {
          border-radius: 4px;
          padding: 10px 0;
          overflow: hidden;
          background: #f5f5f5;
          border: 1px solid #eee;
          display: flex;
          justify-content: flex-start;
        }
        .hotlottery-body-left {
          margin-left: 10px;
          background: #e6e8f3;
          border: 2px solid #fff;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          line-height: 50px;
        }
        .hotlottery-body-right {
          color: #fafafa;
          margin-left: 10px;
          padding: 5px 0;
          .bold {
            font-size: 14px;
          }
        }
      }
      .body-wrapper:nth-child(1) {
        .hotlottery-body-main {
          background: linear-gradient(to left, #f0b376, #ed725b);
        }
      }

      .body-wrapper:nth-child(2) {
        .hotlottery-body-main {
          background: linear-gradient(to left, #ecd677, #ee9b48);
        }
      }

      .body-wrapper:nth-child(3) {
        .hotlottery-body-main {
          background: linear-gradient(to left, #8aebee, #539eed);
        }
      }

      .body-wrapper:nth-child(4) {
        .hotlottery-body-main {
          background: linear-gradient(to left, #c69af0, #947fef);
        }
      }

      .body-wrapper:nth-child(5) {
        .hotlottery-body-main {
          background: linear-gradient(to left, #ade975, #5ae484);
        }
      }

      .body-wrapper:nth-child(6) {
        .hotlottery-body-main {
          background: linear-gradient(to left, #eb8ccf, #f36969);
        }
      }
    }
  }

  .third-game {
    .third-game-title {
      display: flex;
      flex-wrap: wrap;
      .van-row {
        width: 100%;
        height: 34px;
        line-height: 34px;
        background: #fff;
        margin-top: 15px;
        div:nth-child(1) {
          font-weight: bold;
        }
        div:nth-child(2) {
          color: #919191;
        }
      }
    }
    .third-game-body {
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      .body-wrapper {
        width: 50%;
        padding: 5px;
      }
    }
  }

  .lottery-vr {
    margin-bottom: 55px;
    .lottery-vr-title {
      display: flex;
      flex-wrap: wrap;
      .van-row {
        width: 100%;
        height: 34px;
        line-height: 34px;
        background: #fff;
        margin-top: 15px;
        div:nth-child(1) {
          font-weight: bold;
        }
        div:nth-child(2) {
          color: #919191;
        }
      }
    }
    .lottery-vr-body {
      display: flex;
      flex-wrap: wrap;
      background: #fff;
      .body-wrapper {
        width: 50%;
        padding: 5px;
        p {
          height: 50px;
          line-height: 50px;
          text-align: center;
          color: #fff;
          border-radius: 4px;
          // border: 1px solid #d0021b;
          background: linear-gradient(135deg, #87e7ed, #58a4ed);
        }
      }
    }
  }
}
</style>