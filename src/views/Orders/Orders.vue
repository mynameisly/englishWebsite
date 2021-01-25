<template>
  <div class="Orders">
    <van-nav-bar title="Receiving Center" />
    <div class="grabcont">
      <div class="grabings">
        <img
          src="../../static/img/grabing_en.3563d7b.png"
          alt=""
          class="grabing"
        />
      </div>
      <div class="typeTile">Snapdeal</div>
      <div class="todayVictory">
        <ul>
          <li>
            <div class="litit">Commission</div>
            <p>₹0</p>
          </li>
          <li>
            <div class="litit">Received</div>
            <p>0 orders</p>
          </li>
          <li>
            <div class="litit">Balance</div>
            <p>₹0</p>
          </li>
          <li>
            <div class="litit">Orders Frozen</div>
            <p>0 orders</p>
          </li>
        </ul>
      </div>
      <div class="showTimebox">
        <div class="order-receiving-list">
          <div class="order-receiving-list-left">
            <img
              src="https://api.theshoppers.app/files/product/32960708538/Illusion-Sexy-Mermaid-Train-font-b-Wedding-b-font-Dress-2020-New-Style-Korean-Lace-Appliques.jpg_220x220xz.jpg"
              alt=""
            />
          </div>
          <div class="order-receiving-list-right">
            <p class="p1">
              Illusion Sexy Mermaid Train Wedding Dress 2020 New Style Korean
              Lace Appliques Sequined Fishtail Bride Princess estidos de noiva
            </p>
            <p>₹4,663.85</p>
          </div>
        </div>
        <div class="order-receiving-list">
          <div class="order-receiving-list-left">
            <img
              src="https://api.theshoppers.app/files/product/684973891/Unlocked-Original-Sony-Ericsson-C902-Mobile-Phone-3G-5MP-Bluetooh-MP3-MP4-Player-C902-Cellphone-One.jpg_220x220xz.jpg"
              alt=""
            />
          </div>
          <div class="order-receiving-list-right">
            <p class="p1">
              Sony Ericsson C902c 2G 5MP Refurbished Cellphone Unlocked Original
              3G Bluetooth
            </p>
            <p>₹5,615.11</p>
          </div>
        </div>
      </div>
      <div class="operation">
        <div class="butbox">
          <p @click="stop">STOP</p>
        </div>
        <div class="butbox">
          <p @click="start">START</p>
        </div>
        <div class="butbox" style="display: none">
          <p>In line...</p>
        </div>
        <div class="butbox" style="display: none">
          <p>RECEIVING...</p>
        </div>
      </div>
      <div class="explain">
        Order Receiving Instructions
        <p>（1）Each account can receive 60 orders per day</p>
        <p>
          （2）The commission for Snapdeal order receiving members is 2.5% of
          the order amount
        </p>
        <p>
          （3） The system automatically matches goods on the cloud by using the
          LBS technology
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",
  data() {
    return {};
  },
  created() {},
  methods: {
    start() {
      // 开始
    },
    stop() {
      // 停止
    }
  },
};
</script>

<style lang="scss" scoped>
.Orders {
  .grabcont {
    background: url("../../static/img/bg.a4c9c45.png") no-repeat top #ff4e1f;
    background-size: 100%;
    overflow: hidden;
    .grabings {
      width: 80%;
      height: 35px;
      margin: 20px auto 0;
      text-align: center;
      .grabing {
        width: 100%;
        display: block;
      }
    }
    .typeTile {
      width: 50%;
      border: 1px solid #fff;
      border-radius: 15px;
      margin: 0 auto;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
    }
    .todayVictory {
      color: #fff;
      font-size: 16px;
      margin: 10px 40px 0;
      ul {
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        margin-top: 15px;
        border-radius: 15px 15px 0 0;
        padding-top: 10px;
        padding-bottom: 10px;
        li {
          width: 50%;
          color: #666;
          text-align: center;
          .litit {
            line-height: normal;
            height: 20px;
            display: flex;
            align-items: center;
            width: 100%;
            font-size: 12px;
            justify-content: center;
          }
          p {
            color: #f25223;
            font-size: 16px;
            line-height: 26px;
          }
        }
      }
    }
    .showTimebox {
      min-height: 150px;
      border: 8px solid transparent;
      border-radius: 10px;
      border-image: url("../../static/img/border.744e221.png") 100 110 round;
      padding: 4px;
      background: #f93a11;
      margin: 0 20px 10px;
      box-shadow: 0 0 5px 5px #fd5a22;
      .order-receiving-list {
        background: url("../../static/img/OrderBg.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        font-size: 12px;
        color: #333;
        height: 50%;
        max-height: 100px;
        width: 100%;
        box-sizing: border-box;
        padding: 2px 4px;
        .order-receiving-list-left {
          width: 80px;
          height: 80px;
          border-radius: 4px;
          border: 1px solid #eee;
          margin-right: 5px;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            vertical-align: top;
            border-radius: 4px;
          }
        }
        .order-receiving-list-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          line-height: 14px;
          padding: 10px;
          p:first-child {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            height: 40px;
          }
          p:nth-child(2) {
            font-size: 14px;
            color: #f25223;
            font-weight: 700;
          }
        }
      }
    }
    .operation {
      display: flex;
      justify-content: space-around;
      .butbox {
        width: 40vw;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 20px;
        padding: 10px 15px;
        background: linear-gradient(#ffa867, #ff824c);
        border-radius: 8px;
        box-shadow: 0 5px 3px 0 #fd5a22;
      }
    }
    .explain {
      color: #fff;
      padding: 20px 20px 180px;
      font-size: 12px;
      p {
        font-size: 12px;
        line-height: 24px;
      }
      p:first-child {
        margin-top: 10px;
      }
    }
  }
}
</style>