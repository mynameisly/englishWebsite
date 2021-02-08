<template>
  <div class="Home">
    <div class="header">
      <div class="left">Hello {{ username }}</div>
      <div class="right">THE SHOPPERS</div>
    </div>
    <!-- 轮播图 -->
    <div class="banners">
      <van-swipe class="imgWrapper" :autoplay="3000">
        <van-swipe-item v-for="(item, index) in imagesArr" :key="index">
          <a @click="toShoppers">
            <img :src="item.homePicLinkUrl" />
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 选项组 -->
    <div class="home-menu">
      <van-grid :column-num="4">
        <van-grid-item class="menu-wrapper" @click="goShoppingAssistant">
          <img
            src="../../static/img/licai.808f4ef.png"
            alt
            style="margin-top: 10px"
          />
          <p>{{ $t('Home.menu.Shopping') }}</p>
        </van-grid-item>
       <van-grid-item class="menu-wrapper" @click="goRecharge">
          <img src="../../static/img/chongzhi.96189b6.png" alt />
          <p>{{ $t('Home.menu.Recharge') }}</p>
        </van-grid-item>
        <van-grid-item class="menu-wrapper" @click="goWithdrawal">
          <img src="../../static/img/Withdrawal.png" alt />
          <p>{{ $t('Home.menu.Withdrawal') }}</p>
        </van-grid-item>
        <van-grid-item class="menu-wrapper" @click="goInvite">
          <img src="../../static/img/Invite.png" alt />
          <p>{{ $t('Home.menu.Invite') }}</p>
        </van-grid-item>
        <van-grid-item class="menu-wrapper" @click="goRules">
          <img src="../../static/img/Rules.png" alt style="margin-top: -10px" />
          <p>{{ $t('Home.menu.Rules') }}</p>
        </van-grid-item>
        <van-grid-item class="menu-wrapper" @click="goCooperative">
          <img src="../../static/img/Cooperative.png" alt />
          <p>{{ $t('Home.menu.Cooperative') }}</p>
        </van-grid-item>
        <van-grid-item class="menu-wrapper" @click="goPlatform">
          <img src="../../static/img/Platform.png" alt />
          <p>{{ $t('Home.menu.Platform') }}</p>
        </van-grid-item>

        <van-grid-item class="menu-wrapper" @click="goVideo">
          <img src="../../static/img/Video.png" alt />
          <p>{{ $t('Home.menu.Video') }}</p>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- News -->
    <div class="noticebox">
      <span class="news">{{ $t('Home.news.News') }}</span>
      <img class="img" src="../../static/img/notice.png" alt="" />
      <van-notice-bar
        style="width: 70%; color: rgb(102, 102, 102)"
        :text="$t('Home.news.Text')"
      />
    </div>

    <!-- Business && Partner -->
    <div class="viptit">
      {{ $t('Home.viptit.v1') }}&nbsp;
      <span>{{ $t('Home.viptit.v2') }}</span>
    </div>

    <div class="task">
      <ul>
        <li v-for="(item,index) in taskList" :key="index" @click="goDetails(item,index)">
          <div class="task-bottom">
            <div>
              <p>{{item.title}}</p>
              <p>
                <img
                  :src="item.icon"
                />
                {{item.money}}
              </p>
            </div>
            <div class="taskBg">
              <img
                :src="item.imgUrl"
                alt=""
              />
            </div>
          </div>
          <p>
            <span>{{ item.orders }} {{ $t('Home.viptit.Orders') }}</span>
            <span>{{ $t('Home.viptit.Reward') }} {{ item.reward }}</span>
          </p>
          <div class="grade">{{ item.grade }}</div>
        </li>
      </ul>
    </div>

    <!-- 弹出框 -->
    <van-popup v-model="showPop" style="width: 80%" class="score">
      <div class="h5-bj">
        <div class="h5-popup">
          <div class="ld"></div>
          <p v-html="$t('Home.popup.content')"></p>
        </div>
        <van-button round class="popBtn" @click="confirmTip">{{ $t('Home.popup.btn') }}</van-button> 
      </div>
    </van-popup>
  </div>
</template>

<script>
import { getlocalStorage } from "@uit/comtool";
export default {
  name: "Home",
  data() {
    return {
      showPop: true,
      username: "2345678",
      imagesArr: [ // 轮播图片
        {
          homePicLinkUrl: "https://api.theshoppers.app/files/admin/971be1df13d3d2979cb2e77a.jpg",
        },
      ],
      taskList: [ // task列表
        {
          title: 'Myntra',
          money: '250.00',
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABuElEQVQ4T63UPWgUQRjG8f87eyaIqIWFGA/ubmOhEBTRQhQFLWxsreJHeWZ3FWKVzkupgih6udPOwo/KzsoiqIilnSCYW08LsbBQUoUk+8iuTZKL3hzJMOW+v3ln5tkxBhyqhzsJFqdwQ+OgCsv6jAWP2V2+bdOvl2wQT/WR/QxtmyXL9oCKicsJA2WfWPh5whtU/cgWSr+7oBHQe0SDYLlDpjHM3YLgAOitPxhVxrHSU1j6aK2vYyt3puvlrSyUfkCwwx9MaveRu4YWL1n725O1R6WoehcLJv3BOHwIXMFx3prpi14wnMK4OQBYewB2FccFa6bPesC42gA37Q9OVBs4dwO5M9aee9MDJmETkZii8kFs+DKohIogrBlZHo0M2SngENgr0BzSPMO6Y/e6v/ICRfuOQXbclNSEvBtdsVheI6yVrio2xeE6XfnH3R/828Bz0C6ws/9awh9UFlm7m0cFxaMvQefWQ/1BOGmt9F0BJrVHyOobA82+20xnryYqh3HBh41vOX9DWqkpHj0Nmt0UELiIOIoxuVlg3/wMcil9sfyHsHbnv8Ge768UX2wvXmnLsJkvq8A/NW60lN7vFxsAAAAASUVORK5CYII=",
          imgUrl: 'https://api.theshoppers.app/files/admin/15e9d9707154ceff0c765aa1.jpg',
          orders: '60',
          reward: '2.5%',
          grade: 'LV.1'
        },
        {
          title: 'Snapdeal',
          money: '250.00',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAACaklEQVQ4T42UzUuUURSHn3NnNBtFKrXJlBo1JKQWLQopghZBUBhYtLAIEkJ0NGobEbipqEURkeYspJVEWPQBhbjxH4iWBmWS3x8FzaijM/N6T7yTNc6ME53VeznnPvzOOb/7ChmhLbWleBMnUc4j1IMI6EdU+5ClN9I1P7P+iqw/6KXAFnxcBXMZdCuwCKJAUfLbhWj0rjyZnftz7y9Az9XlUxptQjy3UVuAyHNw3qF5DsYeR81FQFC9RUG8Rx5MLLuQFOBKRSWr+f2o1CH2PnnRbh7OzQNK+95taKwZuAEyjpNolND4SDqgLVCPePpRjWLjp6Rn4nNae607AojvFaLliDTz+Ot7dzhJBeoqCdacAPsUZAIn0iCh79NpgORwnV7QwyjXGB59JkM4qRZa9xxDbB+GSRKrpyX0bSNACOQoaoP4R19IJzaloGX3Abye18AM8VgjlZNTDGGSKspQSvwlmMJu0COoacY/MpAEaGsggLH7wXMQ6AD5CXoH7A/EeJMAtQ5WijGmHahFbS+GIax8Em2rGkRkH+ADLQKxvyHWgllr0SpqDGgxol5UlkCXERkTDVYvrBkl05T/cdYV0WDVLMj2DapjwDjoKrALZHNWjbIgGqyZBN2ZkXRABlFu4tE4luvAGWBTRl1YtK16CqE8PaFhVDrxmm4efYkTrDoLpgu0LAMQyQHAAd5iEh1oYQyN3wO9AJKpICfAtecYaAO6HMH4BpLry45Irhm4gGmwTWAXwfsScQeZFWF3CzMg/uycrqDyATSBcAjEl2ML//SBui8NST37DEjMNdIwSoX7q/gP56wvMSDhX9M5BwDnwOdIAAAAAElFTkSuQmCC',
          imgUrl: 'https://api.theshoppers.app/files/admin/3812fb22646b87efc451cf70.png',
          orders: '60',
          reward: '3%',
          grade: 'LV.2'
        },
        {
          title: 'Paytm Mall',
          money: '50,000.00',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAACaklEQVQ4T42UzUuUURSHn3NnNBtFKrXJlBo1JKQWLQopghZBUBhYtLAIEkJ0NGobEbipqEURkeYspJVEWPQBhbjxH4iWBmWS3x8FzaijM/N6T7yTNc6ME53VeznnPvzOOb/7ChmhLbWleBMnUc4j1IMI6EdU+5ClN9I1P7P+iqw/6KXAFnxcBXMZdCuwCKJAUfLbhWj0rjyZnftz7y9Az9XlUxptQjy3UVuAyHNw3qF5DsYeR81FQFC9RUG8Rx5MLLuQFOBKRSWr+f2o1CH2PnnRbh7OzQNK+95taKwZuAEyjpNolND4SDqgLVCPePpRjWLjp6Rn4nNae607AojvFaLliDTz+Ot7dzhJBeoqCdacAPsUZAIn0iCh79NpgORwnV7QwyjXGB59JkM4qRZa9xxDbB+GSRKrpyX0bSNACOQoaoP4R19IJzaloGX3Abye18AM8VgjlZNTDGGSKspQSvwlmMJu0COoacY/MpAEaGsggLH7wXMQ6AD5CXoH7A/EeJMAtQ5WijGmHahFbS+GIax8Em2rGkRkH+ADLQKxvyHWgllr0SpqDGgxol5UlkCXERkTDVYvrBkl05T/cdYV0WDVLMj2DapjwDjoKrALZHNWjbIgGqyZBN2ZkXRABlFu4tE4luvAGWBTRl1YtK16CqE8PaFhVDrxmm4efYkTrDoLpgu0LAMQyQHAAd5iEh1oYQyN3wO9AJKpICfAtecYaAO6HMH4BpLry45Irhm4gGmwTWAXwfsScQeZFWF3CzMg/uycrqDyATSBcAjEl2ML//SBui8NST37DEjMNdIwSoX7q/gP56wvMSDhX9M5BwDnwOdIAAAAAElFTkSuQmCC',
          imgUrl: 'https://api.theshoppers.app/files/admin/f8c2a76d1995e53309fa6074.webp',
          orders: '60',
          reward: '3.5%',
          grade: 'LV.3'
        },
        {
          title: 'Paytm Mall',
          money: '50,000.00',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAACaklEQVQ4T42UzUuUURSHn3NnNBtFKrXJlBo1JKQWLQopghZBUBhYtLAIEkJ0NGobEbipqEURkeYspJVEWPQBhbjxH4iWBmWS3x8FzaijM/N6T7yTNc6ME53VeznnPvzOOb/7ChmhLbWleBMnUc4j1IMI6EdU+5ClN9I1P7P+iqw/6KXAFnxcBXMZdCuwCKJAUfLbhWj0rjyZnftz7y9Az9XlUxptQjy3UVuAyHNw3qF5DsYeR81FQFC9RUG8Rx5MLLuQFOBKRSWr+f2o1CH2PnnRbh7OzQNK+95taKwZuAEyjpNolND4SDqgLVCPePpRjWLjp6Rn4nNae607AojvFaLliDTz+Ot7dzhJBeoqCdacAPsUZAIn0iCh79NpgORwnV7QwyjXGB59JkM4qRZa9xxDbB+GSRKrpyX0bSNACOQoaoP4R19IJzaloGX3Abye18AM8VgjlZNTDGGSKspQSvwlmMJu0COoacY/MpAEaGsggLH7wXMQ6AD5CXoH7A/EeJMAtQ5WijGmHahFbS+GIax8Em2rGkRkH+ADLQKxvyHWgllr0SpqDGgxol5UlkCXERkTDVYvrBkl05T/cdYV0WDVLMj2DapjwDjoKrALZHNWjbIgGqyZBN2ZkXRABlFu4tE4luvAGWBTRl1YtK16CqE8PaFhVDrxmm4efYkTrDoLpgu0LAMQyQHAAd5iEh1oYQyN3wO9AJKpICfAtecYaAO6HMH4BpLry45Irhm4gGmwTWAXwfsScQeZFWF3CzMg/uycrqDyATSBcAjEl2ML//SBui8NST37DEjMNdIwSoX7q/gP56wvMSDhX9M5BwDnwOdIAAAAAElFTkSuQmCC',
          imgUrl: 'https://api.theshoppers.app/files/admin/f8c2a76d1995e53309fa6074.webp',
          orders: '60',
          reward: '3.5%',
          grade: 'LV.3'
        },
        {
          title: 'Paytm Mall',
          money: '50,000.00',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAACaklEQVQ4T42UzUuUURSHn3NnNBtFKrXJlBo1JKQWLQopghZBUBhYtLAIEkJ0NGobEbipqEURkeYspJVEWPQBhbjxH4iWBmWS3x8FzaijM/N6T7yTNc6ME53VeznnPvzOOb/7ChmhLbWleBMnUc4j1IMI6EdU+5ClN9I1P7P+iqw/6KXAFnxcBXMZdCuwCKJAUfLbhWj0rjyZnftz7y9Az9XlUxptQjy3UVuAyHNw3qF5DsYeR81FQFC9RUG8Rx5MLLuQFOBKRSWr+f2o1CH2PnnRbh7OzQNK+95taKwZuAEyjpNolND4SDqgLVCPePpRjWLjp6Rn4nNae607AojvFaLliDTz+Ot7dzhJBeoqCdacAPsUZAIn0iCh79NpgORwnV7QwyjXGB59JkM4qRZa9xxDbB+GSRKrpyX0bSNACOQoaoP4R19IJzaloGX3Abye18AM8VgjlZNTDGGSKspQSvwlmMJu0COoacY/MpAEaGsggLH7wXMQ6AD5CXoH7A/EeJMAtQ5WijGmHahFbS+GIax8Em2rGkRkH+ADLQKxvyHWgllr0SpqDGgxol5UlkCXERkTDVYvrBkl05T/cdYV0WDVLMj2DapjwDjoKrALZHNWjbIgGqyZBN2ZkXRABlFu4tE4luvAGWBTRl1YtK16CqE8PaFhVDrxmm4efYkTrDoLpgu0LAMQyQHAAd5iEh1oYQyN3wO9AJKpICfAtecYaAO6HMH4BpLry45Irhm4gGmwTWAXwfsScQeZFWF3CzMg/uycrqDyATSBcAjEl2ML//SBui8NST37DEjMNdIwSoX7q/gP56wvMSDhX9M5BwDnwOdIAAAAAElFTkSuQmCC',
          imgUrl: 'https://api.theshoppers.app/files/admin/f8c2a76d1995e53309fa6074.webp',
          orders: '60',
          reward: '3.5%',
          grade: 'LV.3'
        },
        {
          title: 'Paytm Mall',
          money: '50,000.00',
          icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAACaklEQVQ4T42UzUuUURSHn3NnNBtFKrXJlBo1JKQWLQopghZBUBhYtLAIEkJ0NGobEbipqEURkeYspJVEWPQBhbjxH4iWBmWS3x8FzaijM/N6T7yTNc6ME53VeznnPvzOOb/7ChmhLbWleBMnUc4j1IMI6EdU+5ClN9I1P7P+iqw/6KXAFnxcBXMZdCuwCKJAUfLbhWj0rjyZnftz7y9Az9XlUxptQjy3UVuAyHNw3qF5DsYeR81FQFC9RUG8Rx5MLLuQFOBKRSWr+f2o1CH2PnnRbh7OzQNK+95taKwZuAEyjpNolND4SDqgLVCPePpRjWLjp6Rn4nNae607AojvFaLliDTz+Ot7dzhJBeoqCdacAPsUZAIn0iCh79NpgORwnV7QwyjXGB59JkM4qRZa9xxDbB+GSRKrpyX0bSNACOQoaoP4R19IJzaloGX3Abye18AM8VgjlZNTDGGSKspQSvwlmMJu0COoacY/MpAEaGsggLH7wXMQ6AD5CXoH7A/EeJMAtQ5WijGmHahFbS+GIax8Em2rGkRkH+ADLQKxvyHWgllr0SpqDGgxol5UlkCXERkTDVYvrBkl05T/cdYV0WDVLMj2DapjwDjoKrALZHNWjbIgGqyZBN2ZkXRABlFu4tE4luvAGWBTRl1YtK16CqE8PaFhVDrxmm4efYkTrDoLpgu0LAMQyQHAAd5iEh1oYQyN3wO9AJKpICfAtecYaAO6HMH4BpLry45Irhm4gGmwTWAXwfsScQeZFWF3CzMg/uycrqDyATSBcAjEl2ML//SBui8NST37DEjMNdIwSoX7q/gP56wvMSDhX9M5BwDnwOdIAAAAAElFTkSuQmCC',
          imgUrl: 'https://api.theshoppers.app/files/admin/f8c2a76d1995e53309fa6074.webp',
          orders: '60',
          reward: '3.5%',
          grade: 'LV.3'
        },
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.username = getlocalStorage('AUTH_INFO'); //从本地缓存获取用户名
      this.getImagesArr();
      this.getTaskList();
    },
    getImagesArr() {
      // 获取轮播图列表
      // let params = {};
      // this.fetchget("/api/getImagesArr", params).then((res) => {
      //   if (res.code == 200) {
      //     this.imagesArr = res.data.imagesArr;
      //   }
      // })
    },
    getTaskList() {
      // 获取task列表
      // let params = {};
      // this.fetchget("/api/getTaskList", params).then((res) => {
      //   if (res.code == 200) {
      //     this.taskList = res.data.taskList;
      //   }
      // });
    },
    confirmTip() {
      this.showPop = false
    },
    goDetails(item,index) {
      // 查看详情
      this.$router.push({name: 'Orders',params: {item,index}})
    },
    toShoppers() {
      this.$router.push({ path: "/Shoppers" });
    },
    goShoppingAssistant() {
      this.$router.push({ path: "/ShoppingAssistant" });
    },
    goRecharge() {
      this.$router.push({ path: "/Recharge" });
    },
    goWithdrawal() {
      this.$router.push({ path: "/Withdrawal" });
    },
    goInvite() {
      this.$router.push({ path: "/Invite" });
    },
    goRules() {
      this.$router.push({ path: "/Rules" });
    },
    goCooperative() {
      this.$router.push({ path: "/Cooperative" });
    },
    goPlatform() {
      this.$router.push({ path: "/Platform" });
    },
    goVideo() {
      this.$router.push({ path: "/Video" });
    },
  },
};
</script>

<style lang="scss" scoped>
.Home {
  background: #fff;
  .header {
    width: 100%;
    height: 60px;
    background: #fff;
    text-align: center;
    font-weight: 700;
    color: #000;
    position: fixed;
    top: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
    .left {
      color: #333;
      text-align: left;
    }
    .right {
      color: #ff6a27;
      font-family: Impact;
    }
  }

  .banners {
    margin-top: 60px;
    .imgWrapper {
      margin: 10px;
      height: 155px;
      img {
        width: 100%;
        border-radius: 10px;
        height: 155px;
      }
    }
  }
  .home-menu {
    .menu-wrapper {
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
      p {
        margin-top: 13px;
        text-align: center;
      }
    }
  }
  .noticebox {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 25px;
    background: #f5f5f5;
    border-radius: 3px;
    .news {
      font-size: 12px;
      font-weight: 700;
    }
    .img {
      height: 15px;
      width: 5%;
      margin-left: 5px;
    }
  }
  .viptit {
    font-size: 17px;
    font-weight: 700;
    color: #000;
    margin: 14px 14px 10px;
    display: flex;
    align-items: center;
    background: url(../../static/img/BusinessLine.png) no-repeat 0 100%;
    background-size: 22% 22%;
    span {
      color: #ff6a23;
    }
  }
  .task {
    margin-bottom: 55px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0.26667rem 0.37333rem 0;
      li {
        width: 48%;
        box-shadow: 5px 3px 10px #eee;
        border-radius: 7px;
        margin-bottom: 15px;
        position: relative;
        .task-bottom {
          display: flex;
          width: 100%;
          padding: 25px 12px 10px;
          box-sizing: border-box;
        }
        .task-bottom div:first-child {
          flex: 1;
          padding-top: 3px;
          p {
            line-height: 20px;
          }
          p:nth-child(2) {
            color: tomato;
            font-size: 12px;
            margin-top: 3px;
          }
          p:nth-child(2) img {
            width: 12px;
            height: 12px;
            margin-right: 3px;
          }
        }
        .task-bottom div:nth-child(2) {
          width: 40px;
          height: 40px;
          img {
            height: 100%;
          }
        }
        .taskBg {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border-radius: 5px;
          overflow: hidden;
        }
        > p {
          padding: 0 2px;
          margin-top: 16px;
          margin-bottom: 16px;
          display: flex;
          justify-content: space-between;
          span:first-child {
            width: 44%;
          }
          span:nth-child(2) {
            width: 54%;
          }
          span {
            border: 1px solid #ff575c;
            border-radius: 3px;
            padding: 2px 1px;
            color: #f55200;
            font-size: 13px;
            text-align: center;
          }
        }
        .grade {
          width: 41px;
          height: 16px;
          color: #fff;
          background: #ff6a27;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 7px 0 0 0;
        }
      }
    }
  }
  .h5-bj {
    background: url("../../static/img/popupBg.55e3044.png") no-repeat 0 0
      #fcfcfc;
    background-size: 100%;
    height: auto;
    overflow: hidden;
    .h5-popup {
      border-radius: 6px;
      width: 252px;
      height: auto;
      background: #fff;
      margin: 81px auto 0;
      box-shadow: 3px 7px 17px #eee;
      padding: 115px 20px 20px;
      position: relative;
      text-align: center;
      .ld {
        height: 118px;
        width: 118px;
        background: url("../../static/img/ld.70110f6.png") no-repeat top;
        background-size: 100%;
        position: absolute;
        left: 50%;
        top: -30px;
        margin-left: -59px;
      }
      p {
        color: #666;
        font-size: 13px;
        line-height: 24px;
        margin-top: -20px;
      }
    }
    .popBtn {
      width: 252px;
      display: flex;
      justify-content: center;
      margin: 26px auto 20px !important;
      background-color: #ff5b0a;
      border: 1px solid #ff5b0a;
      color: #fff;
      font-size: 20px;
    }
  }
}
</style>