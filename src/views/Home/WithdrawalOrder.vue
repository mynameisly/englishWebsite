<template>
  <div class="WithdrawalOrder">
    <div class="panel panel-default">
      <div class="panel-body">
        <h2 class="page-header">提现订单</h2>
        <div class="panel panel-default panel-intro" style="padding: 0">
          <div class="bootstrap-table">
            <div
              class="commonsearch-table"
              :class="iscommonsearch ? 'hidden' : ''"
            >
              <form
                class="form-horizontal form-commonsearch nice-validator n-default n-bootstrap"
                novalidate=""
                method="post"
                action=""
              >
                <fieldset>
                  <div class="row">
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="username" class="control-label col-xs-4"
                        >会员编号</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="username-operate"
                          data-name="username"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="username"
                          value=""
                          placeholder="会员编号"
                          id="username"
                          data-index="0"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="mobile" class="control-label col-xs-4"
                        >手机号</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="mobile-operate"
                          data-name="mobile"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="mobile"
                          value=""
                          placeholder="手机号"
                          id="mobile"
                          data-index="1"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="tradeno" class="control-label col-xs-4"
                        >订单号</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="tradeno-operate"
                          data-name="tradeno"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="tradeno"
                          value=""
                          placeholder="订单号"
                          id="tradeno"
                          data-index="2"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="orderno" class="control-label col-xs-4"
                        >支付平台订单号</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="orderno-operate"
                          data-name="orderno"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="orderno"
                          value=""
                          placeholder="支付平台订单号"
                          id="orderno"
                          data-index="3"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="amount" class="control-label col-xs-4"
                        >金额</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="amount-operate"
                          data-name="amount"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="amount"
                          value=""
                          placeholder="金额"
                          id="amount"
                          data-index="4"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="recvname" class="control-label col-xs-4"
                        >收款人姓名</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="recvname-operate"
                          data-name="recvname"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="recvname"
                          value=""
                          placeholder="收款人姓名"
                          id="recvname"
                          data-index="5"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="bankno" class="control-label col-xs-4"
                        >银行账号</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="bankno-operate"
                          data-name="bankno"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="bankno"
                          value=""
                          placeholder="银行账号"
                          id="bankno"
                          data-index="6"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="ifsc" class="control-label col-xs-4"
                        >IFSC</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="ifsc-operate"
                          data-name="ifsc"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="ifsc"
                          value=""
                          placeholder="IFSC"
                          id="ifsc"
                          data-index="7"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="orderstatus" class="control-label col-xs-4"
                        >订单状态</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="orderstatus-operate"
                          data-name="orderstatus"
                          value="="
                          readonly=""
                        /><select class="form-control" name="orderstatus">
                          <option value="">选择</option>
                          <option value="0">待审核</option>
                          <option value="1">已审核</option>
                          <option value="2">已付款</option>
                          <option value="3">付款失败</option>
                        </select>
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="createtime" class="control-label col-xs-4"
                        >创建日期</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="createtime-operate"
                          data-name="createtime"
                          value="RANGE"
                          readonly=""
                        /><input
                          type="text"
                          class="form-control datetimerange"
                          name="createtime"
                          value=""
                          placeholder="创建日期"
                          id="createtime"
                          data-index="9"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="operate2" class="control-label col-xs-4"
                        >操作</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="operate2-operate"
                          data-name="operate2"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="operate2"
                          value=""
                          placeholder="操作"
                          id="operate2"
                          data-index="11"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <div class="col-sm-8 col-xs-offset-4">
                        <button
                          type="submit"
                          class="btn btn-success"
                          formnovalidate=""
                        >
                          提交
                        </button>
                        <button type="reset" class="btn btn-default">
                          重置
                        </button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>

            <div class="fixed-table-toolbar">
              <div class="bs-bars pull-left"></div>
              <div class="columns-right pull-right" style="margin-bottom: 10px">
                <button
                  class="btn btn-default"
                  type="button"
                  name="commonSearch"
                  title="Common search"
                  @click="commonSearch"
                >
                  <i class="glyphicon glyphicon-search"></i>
                </button>
              </div>
              <div class="columns columns-right btn-group pull-right">
                <button
                  class="btn btn-default"
                  type="button"
                  name="toggle"
                  aria-label="toggle"
                  title="切换"
                  @click="toggle"
                >
                  <i class="glyphicon glyphicon-list-alt icon-list-alt"></i>
                </button>
                <div class="keep-open btn-group" title="列">
                  <button
                    type="button"
                    aria-label="columns"
                    class="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i class="glyphicon glyphicon-th icon-th"></i>
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li
                      role="menuitem"
                      v-for="(item, index) in headerList"
                      :key="index"
                    >
                      <label
                        ><input
                          type="checkbox"
                          :data-field="item.name"
                          value="0"
                          :checked="item.name"
                          @click="filterColumn(item.name)"
                        />{{ item.label }}</label
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="pull-right search">
                <input class="form-control" type="text" placeholder="搜索" />
              </div>
            </div>

            <div class="fixed-table-container" style="padding-bottom: 0px">
              <div class="fixed-table-body">
                <div
                  class="fixed-table-loading"
                  style="top: 42px; display: none"
                >
                  正在努力地加载数据中，请稍候……
                </div>

                <table
                  id="table"
                  class="table table-striped table-bordered table-hover table-nowrap"
                  data-pagination="true"
                  data-striped="true"
                  width="100%"
                  style="margin-top: 0px"
                >
                  <thead
                    :style="{
                      display: isToggle ? 'table-header-group' : 'none',
                    }"
                  >
                    <tr>
                      <th
                        style="text-align: center; vertical-align: middle"
                        :data-field="item.name"
                        v-for="(item, index) in headerList"
                        :key="index"
                      >
                        <div class="th-inner">{{ item.label }}</div>
                        <div class="fht-cell"></div>
                      </th>
                    </tr>
                  </thead>

                  <tbody v-show="isToggle == true">
                    <tr
                      :data-index="index"
                      v-for="(item, index) in bodyList"
                      :key="index"
                    >
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.username }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.mobile }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.tradeno }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.orderno }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.amount }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.recvname }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.bankno }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.ifsc }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.orderstatus }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.createtime }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.operate }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        <a
                          v-if="item.operate2 == '设置为已支付'"
                          href="javascript:;"
                          class="btn btn-info btn-view btn-xs"
                          ><i class="fa fa-check"></i>{{ item.operate2 }}</a
                        >
                        <a
                          v-else
                          href="javascript:;"
                          class="btn btn-danger btn-chooseone btn-xs"
                          ><i class="fa fa-minus-square"></i
                          >{{ item.operate2 }}</a
                        >
                      </td>
                    </tr>
                  </tbody>

                  <tbody v-show="isToggle == false">
                    <tr
                      :data-index="index"
                      v-for="(item, index) in bodyList"
                      :key="index"
                    >
                      <td colspan="8">
                        <div class="card-views">
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >会员编号</span
                            ><span class="value">{{ item.username }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >手机号</span
                            ><span class="value">{{ item.mobile }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >订单号</span
                            ><span class="value">{{ item.tradeno }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >支付平台订单号</span
                            ><span class="value">{{ item.orderno }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >金额</span
                            ><span class="value">{{ item.amount }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >收款人姓名</span
                            ><span class="value">{{ item.recvname }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >银行账号</span
                            ><span class="value">{{ item.bankno }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >IFSC</span
                            ><span class="value">{{ item.ifsc }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >订单状态</span
                            ><span class="value">{{ item.orderstatus }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >创建日期</span
                            ><span class="value">{{ item.createtime }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >审核</span
                            ><span class="value">{{ item.operate }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >操作</span
                            ><span class="value">
                              <a
                                v-if="item.operate2 == '设置为已支付'"
                                href="javascript:;"
                                class="btn btn-info btn-view btn-xs"
                                ><i class="fa fa-check"></i
                                >{{ item.operate2 }}</a
                              >
                              <a
                                v-else
                                href="javascript:;"
                                class="btn btn-danger btn-chooseone btn-xs"
                                ><i class="fa fa-minus-square"></i
                                >{{ item.operate2 }}</a
                              >
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="fixed-table-footer" style="display: none">
                <table>
                  <tbody>
                    <tr></tr>
                  </tbody>
                </table>
              </div>
              <div class="fixed-table-pagination" style="display: block">
                <div class="pull-left pagination-detail">
                  <span class="pagination-info"
                    >显示第 1 到第 {{ pageSize }} 条记录，总共
                    {{ total }} 条记录</span
                  ><span class="page-list"
                    >每页显示
                    <span class="btn-group dropup"
                      ><button
                        type="button"
                        class="btn btn-default dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span class="page-size">{{ pageSize }}</span>
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu" role="menu">
                        <li role="menuitem">
                          <a href="#" @click="toggle1">10</a>
                        </li>
                        <li role="menuitem">
                          <a href="#" @click="toggle2">25</a>
                        </li>
                      </ul></span
                    >
                    条记录</span
                  >
                </div>
                <div class="pull-right pagination" style="display: none">
                  <ul class="pagination">
                    <li class="page-pre">
                      <a href="#" @click="previousPage">上一页</a>
                    </li>
                    <li class="page-number active"><a href="#">1</a></li>
                    <li class="page-next">
                      <a href="#" @click="nextPage">下一页</a>
                    </li>
                    <li class="jumpto">
                      <input type="text" class="form-control" /><button
                        class="btn btn-default"
                        title="Go"
                        type="button"
                        @click="go"
                      >
                        Go
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WithdrawalOrder",
  data() {
    return {
      iscommonsearch: true,
      isToggle: true, //是否切换视图
      headerList: [
        // 标题数组
        {
          label: "会员编号",
          name: "username",
        },
        {
          label: "手机号",
          name: "mobile",
        },
        {
          label: "订单号",
          name: "tradeno",
        },
        {
          label: "支付平台订单号",
          name: "orderno",
        },
        {
          label: "金额",
          name: "amount",
        },
        {
          label: "收款人姓名",
          name: "recvname",
        },
        {
          label: "银行账号",
          name: "bankno",
        },
        {
          label: "IFSC",
          name: "ifsc",
        },
        {
          label: "订单状态",
          name: "orderstatus",
        },
        {
          label: "创建日期",
          name: "createtime",
        },
        {
          label: "审核",
          name: "operate",
        },
        {
          label: "操作",
          name: "operate2",
        },
      ],
      bodyList: [
        // body数据
        {
          username: "110999961",
          mobile: "1234567890",
          tradeno: "-",
          orderno: "1611923534467919505",
          amount: "100.00",
          recvname: "MUHAMMED",
          bankno: "BASHEER",
          ifsc: "UCBA0002972",
          orderstatus: "未支付",
          createtime: "2021-01-29 18:02:14		",
          operate: "待审核",
          operate2: "设置为已支付",
        },
      ],
      pageSize: "30", //每页条数
      total: "100", //总条数
    };
  },
  created() {},
  mounted() {},
  methods: {
    toggle() {
      // 视图切换
      this.isToggle = !this.isToggle;
    },
    filterColumn(name) {
      console.log("name", name);
      // 筛选列
      this.headerList.filter((item) => {
        return item.name.includes(name);
      });
      console.log("1", this.headerList);
      // this.bodyList.firlter(item => item.indexOf(name) < 0)
    },
    commonSearch() {
      // 搜索
      this.iscommonsearch = !this.iscommonsearch;
    },
    previousPage() {
      // 上一页
    },
    nextPage() {
      // 下一页
    },
    go() {
      // 前往第几页
    },
    toggle1() {
      // 每页显示10条数据
      this.pageSize = this.total / 10;
    },
    toggle2() {
      // 每页显示25条数据
      this.pageSize = this.total / 25;
    },
  },
};
</script>

<style lang="scss" scoped>
.fixed-table-toolbar .columns label {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.428571429;
}
.fixed-table-toolbar .columns-right {
  margin-left: 5px;
}
.fixed-table-container {
  .fixed-table-body {
    // overflow-x: auto;
    // overflow-y: auto;
    // height: 100%;
    width: 100%;
  }
}

.card-view .title {
  font-size: 13px;
  font-weight: 700;
  display: inline-block;
  min-width: 30%;
  text-align: left !important;
}
</style>
