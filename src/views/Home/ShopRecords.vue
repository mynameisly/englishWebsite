<template>
  <div class="Records">
    <van-nav-bar
      :title="$t('ShopRecords.title')"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- <div class="wrapper">
      {{ $t("ShopRecords.content") }}
    </div> -->

    <div ref="records" class="Recharge">
      <div role="feed" class="van-list">
        <div v-if="recordsList.length>0">
          <div
            class="flex jc-sb aic walletLogbox"
            v-for="(item, index) in recordsList"
            :key="index"
          >
            <div>
              <p class="p1">{{ item.amount }}</p>
              <span>{{ item.expire_date }}</span>
            </div>
            <b class=""> {{ item.total_in_come }} </b>
          </div>
        </div>

        <div v-else class="nomare">-No more -</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Records",
  data() {
    return {
      recordsList: [],
    };
  },
  mounted() {
    this.getShopRecords();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getShopRecords() {
      // 用户投资记录
      let params = {};
      params = this.formDataObject(params)
      this.fetchget(this.baseUrl + "/income/user_income_list", params).then((res) => {
        if (res.status === 0) {
          this.$toast(res.info);
        } else {
          this.recordsList = res.data;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Records {
  height: 100vh;
  background: #fff;
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
  .nomare {
    color: #969799;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
  }
}
</style>