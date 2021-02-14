<template>
  <div class="AccountHis">
    <van-nav-bar :title="$t('AccountHis.title')" left-arrow @click-left="onClickLeft" />

    <ul class="list">
      <li
        class="list-item"
        v-for="(item, index) in itemList"
        :key="index"
        @click="toggleItem(index, item)"
        :class="{ action: index == current }"
      >
        {{ item.name }}
      </li>
    </ul>

    <div v-show="current == 0" ref="wallet" class="Recharge">
      <div role="feed" class="van-list">
        <div>
          <div
            class="flex jc-sb aic walletLogbox"
            v-for="(item, index) in walletList"
            :key="index"
          >
            <div>
              <p class="p1">{{ item.name }}</p>
              <span>{{ item.time }}</span>
            </div>
            <b class=""> {{ item.money }} </b>
          </div>
        </div>

        <div class="nomare">-No more -</div>
      </div>
    </div>

    <div v-show="current == 1" ref="recharge" class="Recharge">
      <div role="feed" class="van-list">
        <div>
          <div
            class="flex jc-sb aic walletLogbox"
            v-for="(item, index) in rechargeList"
            :key="index"
          >
            <div>
              <p class="p1">{{ item.name }}</p>
              <span>{{ item.time }}</span>
            </div>
            <b class=""> {{ item.money }} </b>
          </div>
        </div>

        <div class="nomare">-No more -</div>
      </div>
    </div>

    <div v-show="current == 2" ref="withdrawal" class="Recharge">
      <div role="feed" class="van-list">
        <div>
          <div
            class="flex jc-sb aic walletLogbox"
            v-for="(item, index) in withdrawalList"
            :key="index"
          >
            <div>
              <p class="p1">{{ item.amount }}</p>
              <span>{{ item.created_at }}</span>
            </div>
            <b class=""> {{ item.order_no }} </b>
          </div>
        </div>

        <div class="nomare">-No more -</div>
      </div>
    </div>

    <div v-show="current == 3" ref="shopping" class="Recharge">
      <div role="feed" class="van-list">
        <div>
          <div
            class="flex jc-sb aic walletLogbox"
            v-for="(item, index) in shoppingList"
            :key="index"
          >
            <div>
              <p class="p1">{{ item.name }}</p>
              <span>{{ item.time }}</span>
            </div>
            <b class=""> {{ item.money }} </b>
          </div>
        </div>

        <div class="nomare">-No more -</div>
      </div>
    </div>

    <div v-show="current == 4" ref="order" class="Recharge">
      <div role="feed" class="van-list">
        <div>
          <div
            class="flex jc-sb aic walletLogbox"
            v-for="(item, index) in orderList"
            :key="index"
          >
            <div>
              <p class="p1">{{ item.name }}</p>
              <span>{{ item.time }}</span>
            </div>
            <b class=""> {{ item.money }} </b>
          </div>
        </div>

        <div class="nomare">-No more -</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountHis",
  data() {
    return {
      current: 0,
      itemList: [
        { name: "Wallet Details" },
        { name: "Recharge Details" },
        { name: "Withdrawal" },
        { name: "Shopping Assistant Details" },
        { name: "Order Receiving" },
      ],
      walletList: [

      ],
      rechargeList: [
        {
          name: "Unreviewed",
          time: "2021-01-21 13:20:39",
          money: "5,000.00",
        },
        {
          name: "Unreviewed",
          time: "2021-01-21 13:20:39",
          money: "5,000.00",
        },
        {
          name: "Unreviewed",
          time: "2021-01-21 13:20:39",
          money: "5,000.00",
        },
        {
          name: "Unreviewed",
          time: "2021-01-21 13:20:39",
          money: "5,000.00",
        },
        {
          name: "Unreviewed",
          time: "2021-01-21 13:20:39",
          money: "5,000.00",
        },
      ],
      withdrawalList: [

      ],
      shoppingList: [

      ],
      orderList: [

      ]
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    toggleItem(index, item) {
      this.current = index;
      switch(item.name) {
        case 'Wallet Details': this.getWalletList(); break;
        case 'Recharge Details': this.getRechargeList(); break;
        case 'Withdrawal': this.getWithdrawalList(); break;
        case 'Shopping Assistant Details': this.getShoppingList(); break;
        case 'Order Receiving': this.getOrderList(); break;
      }
    },
    getWalletList() {
      // let params = {
        
      // }
      // this.fetchpost(this.baseUrl+'/', params).then(res => {
      //   if(res.status == 1) {
      //     this.$toast(res.info)
      //     this.walletList = res.data;
      //   }else{
      //     this.$toast(res.info);
      //   }
      // })     
    },
    getRechargeList() {
      // let params = {

      // }
      // this.fetchpost(this.baseUrl+'/', params).then(res => {
      //   if(res.status == 1) {
      //     this.$toast(res.info)
      //     this.rechargeList = res.data;
      //   }else{
      //     this.$toast(res.info);
      //   }
      // })
    },
    getWithdrawalList() {
      this.fetchget(this.baseUrl+'/payout/list').then(res => {
        if(res.status == 1) {
          this.withdrawalList = res.data;
          console.log('Withdrawal res',this.withdrawalList)
        }else{
          this.$toast(res.info);
        }
      })
    },
    getShoppingList() {
      // let params = {

      // }
      // this.fetchpost(this.baseUrl+'/', params).then(res => {
      //   if(res.status == 1) {
      //     this.$toast(res.info)
      //     this.shoppingList = res.data;
      //   }else{
      //     this.$toast(res.info);
      //   }
      // })
    },
    getOrderList() { //TODO
      this.fetchget(this.baseUrl+'/payin/list').then(res => {
        if(res.status == 1) {
          this.orderList = res.data;
        }else{
          this.$toast(res.info);
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.AccountHis {
  background: #fff;
  height: 100vh;
  .list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .action {
      width: 20px;
      height: 2px;
      border-bottom: 2px solid #ff5200;
    }
    .show {
      display: block;
    }
    .list-item {
      width: 20%;
      height: 44px;
      line-height: 44px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .nomare {
    color: #969799;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
  }
  .Wallet {
  }
  .Recharge {
    .walletLogbox {
      height: 60px;
      padding: 0 20px;
      border-bottom: 1px solid #f1f1f1;
      .p1 {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #999;
      }
      span {
        font-size: 12px;
        font-weight: 500;
        line-height: 24px;
        color: #999;
        font-family: PingFang SC;
      }
      b {
        color: #f25223;
      }
    }
  }
  .Withdrawal {
  }
  .Shopping {
  }
  .Order {
  }
}
</style>