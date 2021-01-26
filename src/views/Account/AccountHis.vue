<template>
  <div class="AccountHis">
    <van-nav-bar title="Account History" left-arrow @click-left="onClickLeft" />

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

    <div v-show="current == 0" ref="wallet" class="Wallet">
      <div class="nomare">-No more -</div>
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

    <div v-show="current == 2" ref="withdrawal" class="Withdrawal">
      <div class="nomare">-No more -</div>
    </div>

    <div v-show="current == 3" ref="shopping" class="Shopping">
      <div class="nomare">-No more -</div>
    </div>

    <div v-show="current == 4" ref="order" class="Order">
      <div class="nomare">-No more -</div>
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
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    toggleItem(index, item) {
      this.current = index;
    },
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