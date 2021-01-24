<template>
  <div class="Service">
    <div class="top-bg"><p>Customer Service Center</p></div>

    <div class="pt-45">
      <div class="OnlineService">
        <div class="OnlineService-left">
          <img src="../../static/img/kf_icon.bff9020.png" alt="" />
        </div>
        <div class="OnlineService-right">
          <p>Online Customer Service</p>
          <p>Contact Customer Service</p>
          <a href="https://direct.lc.chat/12296571/">Consult Now</a>
        </div>
      </div>
      <br />
      <div class="servicebox servicebor">
        <div style="width: 100%">
          <div>
            <b style="color: rgb(0, 0, 0);font-size:18px">Common Problem</b>
          </div>
        </div>
        <i class="van-icon van-icon-arrow"></i>
      </div>
      <br />
      <div class="serviceboxs">
        <div class="servicebox bg4">
          <div>
            <div class="wbox">
              <p>Recharge Customer Service</p>
              <p>WhatsApp：+91 735 470 9554</p>
            </div>
          </div>
          <p class="but">Copy</p>
        </div>
        <div class="servicebox bg4">
          <div>
            <div class="wbox">
              <p>Activity Welfare Customer Service</p>
              <p>WhatsApp：+91 896 604 8523</p>
            </div>
          </div>
          <p class="but">Copy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Config from "@/utils/config.js";
export default {
  name: "Service",
  data() {
    return {};
  },
  created() {},
  methods: {},
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
        color: #fff!important;
        border-radius: 50px;
        padding: 8px 0;
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