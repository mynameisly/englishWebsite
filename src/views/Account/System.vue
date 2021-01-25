<template>
  <div class="System">
    <!-- header -->
    <van-nav-bar
      title="System Messages"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <img
          style="width: 17px; height: 17px"
          src="../../static/img/Account/delete.png"
          alt=""
        />
      </template>
    </van-nav-bar>

    <div class="recordmain pt-45">
      <div class="flex jc-sa recordtit bg-fff">
        <p
          v-for="(item, index) in itemList"
          :key="index"
          @click="toggleItem(index)"
          :class="{ action: index == current }"
        >
          {{ item.name }}
        </p>
      </div>
      <div class="feed">
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
import {Dialog} from 'vant'
export default {
  name: "System",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      current: 0,
      itemList: [
        {
          name: "Announcements",
        },
        {
          name: "Site Messages",
        },
      ],
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
    toggleItem(index) {
      this.current = index;
      // 发送请求
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Dialog.confirm({
        title: "Tip",
        message: "Marked as read with one click？",
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.System {
  .jc-sa {
    justify-content: space-around;
  }
  .flex {
    display: flex;
  }
  .bg-fff {
    background: #fff;
  }
  .recordmain {
    .recordtit {
      padding: 0;
      position: fixed;
      width: 100%;
      margin-top: -1px;
      border-top: 1px solid #f5f5f5;
      .action {
        background-image: linear-gradient(180deg, #ff792c, #ff5201);
        border-radius: 50px;
        color: #fff;
      }
      p {
        margin: 10px 0;
        height: 30px;
        line-height: 30px;
        padding: 0 40px;
        font-size: 14px;
      }
    }
    .feed {
      padding-top: 50px;
    }
  }
}
</style>