<template>
  <div class="Account">
    <!-- header -->
    <div class="header">Account</div>

    <div class="mymain pt-45">
      <!-- info -->
      <div class="info">
        <div class="mtmsg flex jc-sb">
          <div class="flex touxiangbox">
            <img src="../../static/img/txpic.00e8c08.png" alt="" />
            <div>
              <div class="f18 hl20 namebox">
                <h3 class="fw7">2345678</h3>
                &nbsp;
                <p class="grade">LV.1</p>
              </div>
              <p class="f14 hl20 fw7">ID:239622</p>
            </div>
          </div>
          <div class="signin">
            <p class="p1" @click="$router.push({ path: '/CheckIn' })">
              Check-In
            </p>
          </div>
        </div>
        <div class="flex jc-sb yaoqin">
          <div class="code">
            My Invitation Code：
            <span ref="code">{{ inviteCode }}</span>
          </div>
          <button
            class="capybut"
            :data-clipboard-text="inviteCode"
            @click="copyInviteCode"
          >
            Copy
          </button>
        </div>
      </div>

      <!-- icons -->
      <div class="flex myicon">
        <div @click="$router.push({path: '/Balance'})">
          <img src="../../static/img/Account/Balance.png" alt="" />
          <p>Balance</p>
          <span> {{balance}} </span>
        </div>
        <div @click="$router.push({path: '/AccountHis'})">
          <img src="../../static/img/Account/History.png" alt="" />
          <p>History</p>
          <span> {{history}} </span>
        </div>
        <div @click="$router.push({path: '/ShoppingAssistant'})">
          <img src="../../static/img/Account/Shopping.png" alt="" />
          <p>Shopping Assistant</p>
          <span> {{shopping}} </span>
        </div>
        <div>
          <img src="../../static/img/Account/In.png" alt="" />
          <p>In Review</p>
          <span class="creds"> {{inReview}} </span>
        </div>
      </div>

      <!-- 列表项 -->
      <van-cell-group class="one-block">
        <van-cell is-link to="/Personal">
          <template slot="title">
            <div class="item">
              <img src="../../static/img/Account/Personal.png" />
              <span class="item-text">Personal Info</span>
            </div>
          </template>
        </van-cell>
        <van-cell is-link to="/Direct">
          <template slot="title">
            <div class="item">
              <img src="../../static/img/Account/Direct.png" />
              <span class="item-text">Direct Subordinate</span>
            </div>
          </template>
        </van-cell>
        <van-cell is-link to="/index/Records">
          <template slot="title">
            <div class="item">
              <img src="../../static/img/Account/Order.png" />
              <span class="item-text">Order Records</span>
            </div>
          </template>
        </van-cell>
        <van-cell is-link to="/Invite">
          <template slot="title">
            <div class="item">
              <img src="../../static/img/Account/Invite.png" />
              <span class="item-text">Invite Friends</span>
            </div>
          </template>
        </van-cell>
        <van-cell is-link to="/Activity">
          <template slot="title">
            <div class="item">
              <img src="../../static/img/Account/Activity.png" />
              <span class="item-text">Activity Center</span>
            </div>
          </template>
        </van-cell>
        <van-cell is-link to="/System">
          <template slot="title">
            <div class="item">
              <img src="../../static/img/Account/System.png" />
              <span class="item-text">System Messages</span>
            </div>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="two-block">
        <van-cell is-link to="/Safety">
          <template slot="title">
            <div class="item">
              <img src="../../static/img/Account/Safety.png" />
              <span class="item-text">Safety Management</span>
            </div>
          </template>
        </van-cell>
        <van-cell is-link to="/BankCard">
          <template slot="title">
            <div class="item">
              <img src="../../static/img/Account/Bank.png" />
              <span class="item-text">Bank Card Management</span>
            </div>
          </template>
        </van-cell>
        <van-cell is-link to="/Address">
          <template slot="title">
            <div class="item">
              <img src="../../static/img/Account/Address.png" />
              <span class="item-text">Address Management</span>
            </div>
          </template>
        </van-cell>
        <van-cell is-link to="/index/Service">
          <template slot="title">
            <div class="item">
              <img src="../../static/img/Account/Customer.png" />
              <span class="item-text">Customer Service Center</span>
            </div>
          </template>
        </van-cell>
        <van-cell is-link to="/Setting">
          <template slot="title">
            <div class="item">
              <img src="../../static/img/Account/Setting.png" />
              <span class="item-text">Setting</span>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Clipboard from "clipboard";
import { Toast } from "vant";
export default {
  name: "Account",
  data() {
    return {
      inviteCode: "", //邀请码
      balance: "0",
      history: "-- --",
      shopping: "0",
      inReview: "0",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getAccountData();
    },
    getAccountData() {
      // 发送请求获取邀请码
      // let params = {};
      // this.fetchget("/api/getAccountData", params).then((res) => {
      //   if (res.code == 200) {
      //   }
      // });
      this.inviteCode = "00639Q";
      this.balance = "0";
      this.history = "-- --";
      this.shopping =  "0";
      this.inReview =  "0";
    },
    copyInviteCode() {
      // 复制邀请码
      var clipboard = new Clipboard(".capybut");
      clipboard.on("success", (e) => {
        Toast("Copied successfully");
        clipboard.destroy(); // 释放内存
      });
      clipboard.on("error", (e) => {
        Toast("该浏览器不支持自动复制");
        clipboard.destroy(); // 释放内存
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Account {
  background: url(../../static/img/Account/AccountBg.png) no-repeat top #f7f7f7;
  background-size: cover;
  overflow: hidden;
  .header {
    text-align: center;
    width: 100%;
    line-height: 45px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }

  .pt-45 {
    padding-top: 10px;
  }
  .mymain {
    padding-bottom: 60px;
    .info {
      background: #fff;
      margin: 15px 10px 10px;
      border-radius: 6px;
      .mtmsg {
        padding: 28px 10px 0;
        align-items: center;
        .touxiangbox {
          align-items: center;
          padding: 10px 10px 15px;
          img {
            width: 60px;
            height: 60px;
            margin-right: 10px;
            border-radius: 50px;
            background: #ccc;
          }
          .namebox {
            display: flex;
            h3 {
              font-weight: 400;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            p {
              width: 39px;
              height: 18px;
              line-height: 18px;
              text-align: center;
              background-image: linear-gradient(90deg, #ecd38d, #e9c56e);
              font-size: 13px;
              color: #fff;
              border-radius: 3px;
              margin-top: 1px;
            }
          }
        }
        .signin {
          margin-right: 8px;
          margin-top: -18px;
          .p1 {
            border-radius: 20px;
            display: flex;
            align-items: center;
            color: #fff;
            font-size: 14px;
            background-image: linear-gradient(45deg, #ff7a2d, #ff5301);
            padding: 6px 12px;
          }
        }
      }
      .yaoqin {
        align-items: center;
        padding: 14px 20px;
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(#eccfa5),
          to(#e2b268)
        );
        background: linear-gradient(90deg, #eccfa5, #e2b268);
        .code {
          color: #302821;
          font-size: 14px;
          span {
            font-size: 18px;
            font-weight: 700;
            color: #302821;
          }
        }
        .capybut {
          padding: 6px 12px;
          border: none;
          font-size: 12px;
          background: #302821;
          color: #e8c38c;
          border-radius: 30px;
        }
      }
    }

    .myicon {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #fff;
      width: 94%;
      margin: 0 auto;
      border-radius: 6px;
      padding: 25px 0 15px;
      div {
        text-align: center;
        width: 25%;
        img {
          width: 23px;
          height: 23px;
          margin-bottom: 6px;
        }
        p {
          font-size: 12px;
          margin-bottom: 6px;
        }
      }
    }

    .one-block,
    .two-block {
      background: #fff;
      width: 94%;
      margin: 10px auto 0;
      border-radius: 6px;
      padding: 5px 10px;
      .item {
        display: flex;
        align-items: center;
        img {
          width: 17px;
          height: 17px;
        }
        .item-text {
          margin-left: 15px;
          font-size: 14px;
        }
      }
    }

    .two-block {
      // margin-top: 10px;
    }
  }
}
</style>