<template>
  <div class="Home">
    <div class="header">
      <div class="left">Hello {{ username }}</div>
      <div class="right">THE SHOPPERS</div>
    </div>
    <!-- 轮播图 -->
    <div class="banners">
      <van-swipe class="imgWrapper" :autoplay="3000">
        <van-swipe-item v-for="(item, index) in imagesArr" :key="index">
          <a>
            <img :src="item.homePicLinkUrl" />
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 选项组 -->
    <div class="home-menu">
      <van-grid :column-num="5">
        <van-grid-item @click="a">
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
      username: "2345678",
      imagesArr: [
        {
          homePicLinkUrl:
            "https://api.theshoppers.app/files/admin/971be1df13d3d2979cb2e77a.jpg",
        },
      ],
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
      this.fetchget("/api/getSysConfig", params).then((res) => {
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
          res.data.platforms.forEach((element) => {
            var tmp = this.allThird.filter((item) => item.name == element.name);
            if (tmp.length > 0) {
              this.thirdGameList.push(tmp[0]);
            }
          });

          // 提交作为全局数据
          this.$store.commit("setValue", {
            lotteries: res.data.lotteries,
          });

          console.log(this.$store);
        }
      });
    },
    getHomePic() {
      let params = {
        picType: 1,
      };
      this.fetchget("/api/getHomePicApp", params).then((res) => {
        if (res.code == 200) {
          this.imagesArr = res.data.homePics;
        }
      });
    },
    a() {},
  },
};
</script>

<style lang="scss" scoped>
.Home {
  background: #fff;
  .header {
    width: 100%;
    height: 60px;
    background: #fff;
    text-align: center;
    font-weight: 700;
    color: #000;
    position: fixed;
    top: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
    .left {
      color: #333;
      text-align: left;
    }
    .right {
      color: #ff6a27;
      font-family: Impact;
    }
  }

  .banners {
    margin-top: 60px;
    .imgWrapper {
      margin: 10px;
      height: 155px;
      img {
        width: 100%;
        border-radius: 10px;
        height: 155px;
      }
    }
  }
}
</style>