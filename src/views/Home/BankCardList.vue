<template>
  <div class="bankcardList">
    <!-- 银行卡列表 -->
    <van-nav-bar title="已绑定银行卡" left-arrow @click-left="onClickLeft" />

    <div v-if="bankCardList.length > 0" ref="recharge" class="Recharge">
      <div role="feed" class="van-list">
        <div>
          <div
            class="flex jc-sb aic walletLogbox"
            v-for="(item, index) in bankCardList"
            :key="index"
          >
            <div>
              <p class="p1">{{ item.bank_name }}</p>
              <p class="p2" style="margin-top: 5px; margin-bottom: 5px">
                {{ item.name }}
              </p>
              <p class="p2">{{ item.card_id }}</p>
            </div>
            <span>{{ item.created_at }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="nomare">-No more -</div>
  </div>
</template>

<script>
export default {
  bank_name: "bankcardList",
  data() {
    return {
      bankCardList: [
        {
          bank_name: "HDFC bank",
          name: "Carla Jones",
          created_at: "2021-01-21 13:20:39",
          card_id: "09988323232887332",
        },
        {
          bank_name: "HDFC bank",
          name: "Carla Jones",
          created_at: "2021-01-21 13:20:39",
          card_id: "09988323232887332",
        },
        {
          bank_name: "HDFC bank",
          name: "Carla Jones",
          created_at: "2021-01-21 13:20:39",
          card_id: "09988323232887332",
        },
        {
          bank_name: "HDFC bank",
          name: "Carla Jones",
          created_at: "2021-01-21 13:20:39",
          card_id: "09988323232887332",
        },
        {
          bank_name: "HDFC bank",
          name: "Carla Jones",
          created_at: "2021-01-21 13:20:39",
          card_id: "09988323232887332",
        },
      ],
    };
  },
  mounted() {
    this.getBankCardList();
  },
  methods: {
    getBankCardList() {
      // 获取银行卡列表
      let params = {
        amount: 900,
      };
      this.fetchget(this.baseUrl + "/bank/list", params).then((res) => {
        if (res.status === 0) {
          this.$toast(res.info);
        } else {
          this.bankCardList = res.data;
        }
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.bankcardList {
  .Recharge {
    .walletLogbox {
      height: 100px;
      margin: 20px;
      border: 1px solid red;
      border-radius: 10px;
      padding: 0 20px;
      background-image: linear-gradient(
        to right,
        rgb(220, 87, 91),
        rgb(211, 80, 138)
      );
      color: #fff;
      .p1 {
        font-size: 20px;
      }
      .p2 {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
      }
      span {
        font-size: 12px;
        font-weight: 500;
        line-height: 24px;
        font-family: PingFang SC;
      }
    }
  }
  .nomare {
    color: #969799;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
  }
}
</style>