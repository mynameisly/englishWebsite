<template>
  <div class="Direct">
    <!-- header -->
    <van-nav-bar
      title="Direct Subordinate"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="subordinatemain pt-45">
      <div class="flex jc-sa subordinatetit bg-fff">
        <p v-for="(item,index) in itemList" :key="index" @click="toggleItem(index)" :class="{action:index == current}">
          {{item.name}}
        </p>
      </div>
      <div class="commonbox subordinatemsg">
        <div class="flex aic subordinatemsgitem">
          <div>
            <span> Direct Push</span>
            <p>0</p>
          </div>
          <div>
            <span> Team</span>
            <p>0</p>
          </div>
          <div>
            <span> Recharge Person</span>
            <p>0</p>
          </div>
        </div>
        <div class="flex aic subordinatemsgitem">
          <div>
            <span> Recharge</span>
            <p>0</p>
          </div>
          <div>
            <span> Withdrawal</span>
            <p>0</p>
          </div>
          <div>
            <span> Team Commission</span>
            <p>0</p>
          </div>
        </div>
      </div>
      <div class="recommendbox">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="No More Records"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Direct",
  data() {
    return {
      current: 0,
      itemList: [{
        name: 'Generation 1'
      },{
        name: 'Generation 2'
      },{
        name: 'Generation 3'
      }],
      list: [],
      loading: false,
      finished: false,
    };
  },
  created() {},
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        this.finished = true;
      }, 1000);
    },
    toggleItem(index){
      // alert(index)
      this.current = index;
      // 发送对应请求
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.Direct {
  .bg-fff {
    background: #fff;
  }
  .flex {
    display: flex;
  }
  .jc-sa {
    justify-content: space-around;
  }
  .aic {
    align-items: center;
  }
  .subordinatemain {
    .subordinatetit {
      border-bottom: 1px solid #f5f5f5;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.06);
      padding: 0;
      .action {
        border-bottom: 3px solid coral;
        color: #333;
      }
      p {
        height: 40px;
        line-height: 30px;
        margin: 0 10px;
        font-size: 12px;
      }
    }
    .subordinatemsg {
      background-image: linear-gradient(180deg, #fe8946, #fd6822);
      color: #fff;
      padding: 10px 15px;
      div {
        padding: 10px 0;
        width: 100%;
        span {
          color: #f1f1f1;
          font-size: 12px;
        }
        p {
          font-size: 14px;
          margin-top: 4px;
        }
      }
    }
    .commonbox {
      margin: 10px;
      background-color: #fff;
      border-radius: 5px;
    }
    .recommendbox[data-v-1ece00b6] {
      height: 100%;
      margin: 10px;
      padding: 10px 10px 0;
      background-color: #fff;
    }
  }
}
</style>