<template>
  <div class="BackgroundCenter">
    <div class="panel panel-default">
      <div class="panel-body">
        <h2 class="page-header">控制台</h2>
        <div class="row user-baseinfo">
          <div class="panel-body">
            <h4>
              <a href="/index/user/profile.html">业务ID：yewuyuan1</a>
            </h4>
            <h4>推广链接:https://reg.snapgoo.com?invcode=870299</h4>
            <br />

            <div id="myTabContent" class="tab-content">
              <div class="tab-pane fade active in" id="one">
                <div class="row">
                  <div class="col-sm-3 col-xs-6">
                    <div class="sm-st clearfix">
                      <span class="sm-st-icon st-red"
                        ><i class="fa fa-users"></i
                      ></span>
                      <div class="sm-st-info">
                        <span>{{userTotal}}</span>
                        用户总数
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3 col-xs-6">
                    <div class="sm-st clearfix">
                      <span class="sm-st-icon st-violet"
                        ><i class="fa fa-book"></i
                      ></span>
                      <div class="sm-st-info">
                        <span>{{rechargeMoney}}</span>
                        充值总金额
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3 col-xs-6">
                    <div class="sm-st clearfix">
                      <span class="sm-st-icon st-green"
                        ><i class="fa fa-cny"></i
                      ></span>
                      <div class="sm-st-info">
                        <span>{{memRechargeMoney}}</span>
                        会员充值总金额
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3 col-xs-6">
                    <div class="sm-st clearfix">
                      <span class="sm-st-icon st-blue"
                        ><i class="fa fa-shopping-bag"></i
                      ></span>
                      <div class="sm-st-info">
                        <span>{{withdrawalMoney}}</span>
                        提现总金额
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-sm-3 col-xs-6">
                    <div class="sm-st clearfix">
                      <span class="sm-st-icon st-green"
                        ><i class="fa fa-money" aria-hidden="true"></i
                      ></span>
                      <div class="sm-st-info">
                        <span>{{manualRechargeMoney}}</span>
                        手动充值总金额
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div class="card sameheight-item stats">
              <div class="card-block">
                <div class="row row-sm stats-container">
                  <div
                    class="col-xs-6 stat-col"
                    v-for="(item, index) in bgCenterList"
                    :key="index"
                  >
                    <div class="stat-icon">
                      <i class="fa fa-rocket"></i>
                    </div>
                    <div class="stat">
                      <div class="value">{{ item.value }}</div>
                      <div class="name">{{ item.name }}</div>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-success"
                        :style="{ width: item.width + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-9 col-sm-9 col-xs-10">
            <!-- Content -->
            <div class="ui-content">
              <!-- Heading -->

              <!-- Paragraph -->
              <p></p>
              <h4><a href="#">手动充值额度：{{ manualRechargeQuota }}</a></h4>
              <p></p>
              <p></p>
              <h4><a href="#">已使用充值额度：{{ usedRechargeQuota }}</a></h4>
              <p></p>
              <!-- Success -->
            </div>
          </div>

          <div class="col-md-9 col-sm-9 col-xs-12">
            <!-- Content -->
            <div class="ui-content">
              <div class="basicinfo">
                <div class="row">
                  <div class="col-xs-4 col-md-2">连续登录</div>
                  <div class="col-xs-8 col-md-4">{{ contLogin }} 天</div>
                  <div class="col-xs-4 col-md-2">最长连续登录</div>
                  <div class="col-xs-8 col-md-4">{{ longContLogin }} 天</div>
                </div>
                <div class="row">
                  <div class="col-xs-4 col-md-2">登录时间</div>
                  <div class="col-xs-8 col-md-4">{{ loginTime }}</div>
                  <div class="col-xs-4 col-md-2">最后登录</div>
                  <div class="col-xs-8 col-md-4">{{ lastLogin }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackgroundCenter",
  data() {
    return {
      bgCenterList: [
        {
          name: "今日新增用户",
          value: "0",
          width: "30",
        },
        {
          name: "昨日新增用户",
          value: "0",
          width: "25",
        },
        {
          name: "今日充值笔数(不含手动充值)",
          value: "0",
          width: "25",
        },
        {
          name: "昨日充值笔数(不含手动充值)",
          value: "0",
          width: "25",
        },
        {
          name: "今日充值(不含手动充值)",
          value: "0",
          width: "25",
        },
        {
          name: "昨日充值(不含手动充值)",
          value: "0",
          width: "25",
        },
        {
          name: "今日会员充值",
          value: "0",
          width: "30",
        },
        {
          name: "昨日会员充值",
          value: "0",
          width: "25",
        },
        {
          name: "今日提现笔数",
          value: "0",
          width: "25",
        },
        {
          name: "昨日提现笔数",
          value: "0",
          width: "25",
        },
        {
          name: "今日提现",
          value: "0",
          width: "25",
        },
        {
          name: "昨日提现",
          value: "0",
          width: "25",
        },
      ],
      userTotal: '0', //用户总数
      rechargeMoney: '0',//充值总金额
      memRechargeMoney: '0',//会员充值总金额
      withdrawalMoney: '100',//提现总金额
      manualRechargeMoney: '300',//手动充值总金额

      manualRechargeQuota: '30000',//手动充值额度
      usedRechargeQuota: '22000',//已使用充值额度

      contLogin: '3', //连续登录
      longContLogin: '6', //最长连续登录
      loginTime: '2021-01-30 13:40:30', //登录时间
      lastLogin: '2021-01-30 11:26:28', //最后登录
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {

    }
  },
};
</script>

<style lang="scss" scoped>
.user-baseinfo {
  margin-bottom: 25px;
  .sm-st {
    background: #fff;
    padding: 0px;
    border-radius: 3px;
    margin-bottom: 0px;
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05);
  }

  .sm-st-icon {
    width: 60px;
    height: 60px;
    display: inline-block;
    line-height: 60px;
    text-align: center;
    font-size: 30px;
    background: #eee;
    border-radius: 5px;
    float: left;
    margin-right: 10px;
    color: #fff;
  }
  .st-red {
    background-color: #f05050;
  }
  .st-violet {
    background-color: #7266ba;
  }
  .st-green {
    background-color: #27c24c;
  }
  .st-blue {
    background-color: #23b7e5;
  }
  .sm-st-info {
    font-size: 12px;
    padding-top: 2px;
    span {
      display: block;
      font-size: 24px;
      font-weight: 600;
    }
  }

  .stats {
    .stat-icon {
      color: #28bb9c;
      display: inline-block;
      font-size: 26px;
      text-align: center;
      vertical-align: middle;
      width: 50px;
      float: left;
      margin-bottom: 5px;
    }
    .stat {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      .value {
        font-size: 20px;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
      }
      .name {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .stat-col {
      .progress {
        height: 2px;
      }
      .progress-bar {
        line-height: 2px;
        height: 2px;
      }
    }
  }

  .basicinfo {
    font-size: 13px;
    margin: 15px 0;
    .row {
      margin: 5px 0;
      .col-xs-4 {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
}
</style>
