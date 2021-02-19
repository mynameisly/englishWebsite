<template>
  <div class="ShoppingAssistant">
    <van-nav-bar
      :title="$t('ShoppersAs.title')"
      left-arrow
      :right-text="$t('ShoppersAs.rgText')"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="container">
      <div class="accountDetails">
        <div class="Available">
          <p>{{ $t("ShoppersAs.balance") }}</p>
          <p>{{ balance }}</p>
        </div>
        <div class="Shopping">
          <p>{{ $t("ShoppersAs.shoping") }}</p>
          <p>{{ shoping }}</p>
        </div>
        <div class="Available">
          <p>{{ $t("ShoppersAs.total") }}</p>
          <p>{{ total }}</p>
        </div>
      </div>

      <div class="balanceInto public-bg">
        <p class="balanceInto-title">
          {{ $t("ShoppersAs.balanceTitle") }}
        </p>
        <van-cell-group>
          <van-cell title="单元格">
            <template #title>
              <div class="wrapper">
                <span class="custom-title">₹</span>
                <input
                  type="text"
                  :placeholder="$t('ShoppersAs.balancePlace')"
                  class="van-field__control"
                  :value="form.amount"
                />
              </div>
            </template>
          </van-cell>
        </van-cell-group>
        <p class="standard">{{ $t("ShoppersAs.incomeTitle") }}</p>
        <ul class="profit">
          <li
            v-for="(item, index) in incomeList"
            :key="index"
            @click="clickItem(index)"
            :style="{
              backgroundColor: index == current ? '#fd6c26' : '#fff',
              color: index == current ? '#fff' : '#000',
            }"
          >
            {{ item.count_day }} &nbsp; Days/ &nbsp; <span style="color: #fd6c26" :style="{
              color: index == current ? '#fff' : '#fd6c26',
            }">+{{ item.in_come }}0%</span> 
          </li>
        </ul>
        <div class="choice">
          <button>{{ $t("ShoppersAs.outBtn") }}</button>
          <button @click="transferIn">{{ $t("ShoppersAs.inBtn") }}</button>
        </div>
      </div>

      <div class="explain public-bg">
        <p class="explain-title">
          <span>{{ $t("ShoppersAs.explainTitle") }}</span>
        </p>
        <p class="explain-center">{{ $t("ShoppersAs.explainVal") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingAssistant",
  data() {
    return {
      balance: "",
      shoping: "",
      total: "",
      form: {
        amount: "", //投资金额
      },
      current: "0",
      incomeList: [
        {
          count_day: 3,
          in_come: 1.4,
        },
        {
          count_day: 7,
          in_come: 1.9,
        },
        {
          count_day: 15,
          in_come: 2.1,
        },
        {
          count_day: 30,
          in_come: 2.5,
        },
      ],
    };
  },
  mounted() {
    // this.getIncomeList();
    this.getShoppingData();
  },
  methods: {
    getIncomeList() {
      // 获取投资列表
      let params = {};
      params = this.formDataObject(params);
      this.fetchget(this.baseUrl + "/income/list", params).then((res) => {
        if (res.status === 0) {
          this.$toast(res.info);
        } else {
          this.incomeList = res.data;
        }
      });
    },
    getShoppingData() {
      // 发送请求
      // let params = this.form;
      // this.fetchget(this.baseUrl+"/linkBackAccount", params).then((res) => {
      //   if (res.code == 200) {

      //   }
      // });
      this.balance = 0;
      this.shoping = 0;
      this.total = 0;
    },
    transferIn() {
      // 投资
      Dialog.confirm({
        title: "Tip",
        message: "Determine the deposit?",
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      })
        .then(() => {
          // on confirm
          let params = this.form;
          params = this.formDataObject(params);
          this.fetchpost(this.baseUrl + "/income/create", params).then(
            (res) => {
              if (res.status === 0) {
                this.$toast(res.info);
              } else {
                if (this.form.amount < 500) {
                  this.$toast("The minimum deposit amount is ₹500.00");
                }

                // TODO
              }
            }
          );
        })
        .catch(() => {
          // on cancel
          this.$router.go(-1);
        });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    clickItem(index) {
      this.current = index;
    },
    onClickRight() {
      this.$router.push({ path: "/ShopRecords" });
    },
  },
};
</script>

<style lang="scss" scoped>
.ShoppingAssistant {
  height: 100vh;
  background: #f3f3f3;
  .container {
    padding: 10px 16px 10px;
    .accountDetails {
      display: flex;
      justify-content: space-around;
      height: 65px;
      border-radius: 5px;
      align-items: center;
      background: #fff;
      div {
        width: 33%;
        text-align: center;
        p:first-child {
          font-size: 12px;
          color: #999;
          margin-bottom: 10px;
        }
        p:last-child {
          font-size: 15px;
          font-weight: 700;
          color: #333;
          text-align: left;
          margin-left: 10px;
        }
      }
    }
    .balanceInto {
      margin-top: 10px;
      padding: 16px;
      border-radius: 5px;
      background: #fff;
      .balanceInto-title {
        font-size: 13px;
        color: #666;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .wrapper {
        position: relative;
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 16px;
        overflow: hidden;
        color: #323233;
        font-size: 14px;
        line-height: 24px;
        background-color: #fff;
        span {
          width: 30px;
          color: #ff5604;
        }
      }
      .standard {
        color: #666;
        font-size: 13px;
        font-weight: 700;
        margin: 20px 0 11px;
      }
      .profit {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 101px;
          height: 40px;
          line-height: 40px;
          border-radius: 5px;
          font-size: 12px;
          color: #000;
          border: 1px solid #fd6c26;
          text-align: center;
          margin-bottom: 5px;
        }
        li:nth-child(2) {
          margin: 0 4px;
        }
      }
      .choice {
        display: flex;
        justify-content: space-between;
        margin-top: 35px;
        margin-bottom: 14px;
        button {
          width: 152px;
          height: 44px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: 0 0;
          font-size: 16px;
        }
        button:last-child {
          color: #fff;
          background-image: linear-gradient(180deg, #ff7a2d, #ff5200);
          border: 1px solid transparent;
        }
      }
    }
    .explain {
      margin-top: 10px;
      padding: 15px 16px;
      border-radius: 5px;
      background: #fff;
      .explain-title {
        margin-bottom: 16px;
        span {
          display: inline-block;
          background: #fec12b;
          color: #fff;
          font-weight: 700;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          padding: 0 2px;
          text-align: center;
          border-radius: 5px;
        }
      }
      .explain-center {
        font-size: 12px;
        color: #999;
        line-height: 24px;
      }
    }
  }
}
</style>