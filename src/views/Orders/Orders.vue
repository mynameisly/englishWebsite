<template>
  <div class="Orders">
    <van-nav-bar :title="$t('Orders.title')" />
    <div class="grabcont">
      <div class="grabings">
        <img
          :src="en == 'en' ? require('../../static/img/grabing_en.3563d7b.png') : require('../../static/img/grabing_id.7994844.png')"
          alt=""
          class="grabing"
        />
      </div>
      <div class="typeTile">Snapdeal</div>
      <div class="todayVictory">
        <ul>
          <li>
            <div class="litit">{{ $t('Orders.Commission') }}</div>
            <p>₹{{Commission}}</p>
          </li>
          <li>
            <div class="litit">{{ $t('Orders.Received') }}</div>
            <p>{{Received}} {{ $t('Orders.orders') }}</p>
          </li>
          <li>
            <div class="litit">{{ $t('Orders.Balance') }}</div>
            <p>₹{{Balance}}</p>
          </li>
          <li>
            <div class="litit">{{ $t('Orders.OrdersF') }}</div>
            <p>{{OrdersF}} {{ $t('Orders.orders') }}</p>
          </li>
        </ul>
      </div>
      <div class="showTimebox">
        <div class="order-receiving-list" v-for="(item,index) in receiveList" :key="index">
          <div class="order-receiving-list-left">
            <img
              :src="item.imgUrl"
              alt=""
            />
          </div>
          <div class="order-receiving-list-right">
            <p class="p1">{{item.intro}}</p>
            <p>₹{{item.money}}</p>
          </div>
        </div>
      </div>


      <div class="operation">
        <div class="butbox">
          <p @click="stop">STOP</p>
        </div>
        <div class="butbox" :style="{'display': (isStart ? 'none' : 'block')}">
          <p @click="start">START</p>
        </div>
        <div class="butbox" style="display: none" :style="{'display': (isStart ? 'block' : 'none')}">
          <p>In line...</p>
        </div>
        <div class="butbox" style="display: none">
          <p>RECEIVING...</p>
        </div>
      </div>
      <div class="explain">
        {{ $t('Orders.explain') }}
        <p>{{ $t('Orders.content.p1') }}</p>
        <p>{{ $t('Orders.content.p2') }}</p>
        <p>{{ $t('Orders.content.p3') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",
  data() {
    return {
      isStart: false,
      en: 'en', //是否是英文包en,印度文包ind
      Commission: '',
      Received: '',
      Balance: '',
      OrdersF: '',
      receiveList: [
        {
          imgUrl: 'https://api.theshoppers.app/files/product/32960708538/Illusion-Sexy-Mermaid-Train-font-b-Wedding-b-font-Dress-2020-New-Style-Korean-Lace-Appliques.jpg_220x220xz.jpg',
          intro: 'Illusion Sexy Mermaid Train Wedding Dress 2020 New Style Korean Lace Appliques Sequined Fishtail Bride Princess estidos de noiva',
          money: '4,663.85'
        },
        {
          imgUrl: 'https://api.theshoppers.app/files/product/684973891/Unlocked-Original-Sony-Ericsson-C902-Mobile-Phone-3G-5MP-Bluetooh-MP3-MP4-Player-C902-Cellphone-One.jpg_220x220xz.jpg',
          intro: 'Sony Ericsson C902c 2G 5MP Refurbished Cellphone Unlocked Original 3G Bluetooth',
          money: '5,615.11'
        }
      ]
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getData();
      this.getReceiveList()
    },
    getData() {
      // let params = {}
      // this.fetchget('/api/getData', params).then((res) => {
      //   if(res.code == 200) {
      //     this.Commission = '0';
      //     this.Received = '0';
      //     this.Balance = '0';
      //     this.OrdersF = '0';
      //   }
      // })
    },
    getReceiveList() {
      // let params = {}
      // this.fetchget('/api/getReceiveList', params).then((res) => {
      //   if(res.code == 200) {
      //     this.receiveList = res.data.getReceiveList;
      //   }
      // })
    },
    start() {
      // 开始
      this.isStart = true;
      // let params = {};
      // this.fetchget("/api/start", params).then((res) => {
      //   if (res.code == 200) {
      //      this.isStart = false;
      //   }
      // });
    },
    stop() {
      // 停止
      // let params = {};
      // this.fetchget("/api/start", params).then((res) => {
      //   if (res.code == 200) {
      //   }
      // });
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
        text-align: center;
        background: linear-gradient(#ffa867, #ff824c);
        border-radius: 8px;
        box-shadow: 0 5px 3px 0 #fd5a22;
        font-size: 12px;
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