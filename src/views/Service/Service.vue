<template>
  <div class="Service">
    <div class="top-bg"><p>{{ $t('Service.title') }}</p></div>
    <div class="pt-45">
      <div class="OnlineService">
        <div class="OnlineService-left">
          <img src="../../static/img/kf_icon.bff9020.png" alt="" />
        </div>
        <div class="OnlineService-right">
          <p>{{ $t('Service.online') }}</p>
          <p>{{ $t('Service.contact') }}</p>
          <a href="https://direct.lc.chat/12296571/">{{ $t('Service.nowBtn') }}</a>
        </div>
      </div>
      <br />
      <div class="servicebox servicebor">
        <div style="width: 100%">
          <div>
            <b style="color: rgb(0, 0, 0);font-size:18px">{{ $t('Service.commonP') }}</b>
          </div>
        </div>
        <i class="van-icon van-icon-arrow" @click="$router.push({path: '/Common'})"></i>
      </div>
      <br />
      <div class="serviceboxs">
        <div class="servicebox bg4">
          <div>
            <div class="wbox">
              <p>{{ $t('Service.recharge') }}</p>
              <p>{{recharge}}</p>
            </div>
          </div>
          <button
            class="but but1"
            :data-clipboard-text="recharge"
            @click="copyRecharge"
          >{{ $t('Service.copy') }}</button>
        </div>
        <div class="servicebox bg4">
          <div>
            <div class="wbox">
              <p>{{ $t('Service.activity') }}</p>
              <p>{{activity}}</p>
            </div>
          </div>
          <button
            class="but but2"
            :data-clipboard-text="activity"
            @click="copyActivity"
          >{{ $t('Service.copy') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import {Toast} from 'vant'
export default {
  name: "Service",
  data() {
    return {
      recharge: '',
      activity: ''
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getServiceData();
    },
    getServiceData() {
      console.log('1')
      // 发送请求
      let params = {};
      this.fetchget(this.baseUrl+"/service/info", params).then((res) => {
        if (res.status === 0) {
          this.$toast(res.info);
        } else {
          this.recharge = res.data[0].value;
          this.activity = res.data[1].value;
        }
      });
    },
    copyRecharge() {
       // 复制邀请码
      var clipboard = new Clipboard(".but1");
      clipboard.on("success", (e) => {
        Toast("Copied successfully");
        clipboard.destroy(); // 释放内存
      });
      clipboard.on("error", (e) => {
        Toast("该浏览器不支持自动复制");
        clipboard.destroy(); // 释放内存
      });
    },
    copyActivity() {
       // 复制邀请码
      var clipboard = new Clipboard(".but2");
      clipboard.on("success", (e) => {
        Toast("Copied successfully");
        clipboard.destroy(); // 释放内存
      });
      clipboard.on("error", (e) => {
        Toast("该浏览器不支持自动复制");
        clipboard.destroy(); // 释放内存
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.Service {
  padding-bottom: 4rem;
  .top-bg {
    height: 152px;
    background-image: linear-gradient(180deg, #ff792c, #ff5402);
    overflow: hidden;
    p {
      color: #fff;
      text-align: center;
      font-size: 0.42667rem;
      font-weight: 600;
      margin-top: 16px;
    }
  }
  .pt-45 {
    padding-top: 45px;
    .OnlineService {
      margin: -140px 10px 0;
      background: #fff;
      border-radius: 11px;
      display: flex;
      align-content: center;
      padding: 33px 25px 35px;
      box-sizing: border-box;
      .OnlineService-left {
        width: 105px;
        height: 105px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .OnlineService-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        p:first-child {
          font-size: 16px;
          font-weight: 700;
          margin-top: 8px;
          text-align: center;
        }
        p:nth-child(2) {
          color: #868686;
          font-size: 15px;
          margin: 10px 0 13px 10px;
          word-break: break-all;
        }
        a {
          display: inline-block;
          color: #fff;
          background-image: linear-gradient(45deg, #ffbc1a, #ffa109);
          width: 160px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-radius: 50px;
          font-size: 15px;
        }
      }
    }
    .servicebor {
      border-radius: 16px;
      div {
        color: #8c8c8d;
        width: 80%;
      }
    }
    .servicebox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      background-attachment: fixed;
      margin: 0 10px;
      padding: 17px 19px;
      height: 68px;
      > div {
        color: #8c8c8d;
        width: 80%;
        .wbox{
          width:100%;
        }
      }
      .but {
        border: none;
        color: #fff!important;
        border-radius: 50px;
        padding: 5px 0;
        width: 82px;
        font-size: 14px;
        text-align: center;
        display: inline-block;
        background-image: linear-gradient(45deg, #ffbc1a, #ffa109);
      }
    }
    .serviceboxs {
      :first-child {
        border-radius: 17px 17px 0 0;
      }
      > div {
        color: #8c8c8d;
        width: 94%;
        border-bottom-right-radius: 17px;
        border-bottom-left-radius: 17px;
        p:first-child {
          color: #666;
          font-size: 15px;
        }
        p:nth-child(2) {
          color: #8c8c8d;
          font-size: 14px;
          margin-top: 9px;
        }
      }
    }
  }
}
</style>