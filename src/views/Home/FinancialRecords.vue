<template>
  <div class="FinancialRecords">
    <div class="panel panel-default">
      <div class="panel-body">
        <h2 class="page-header">理财记录</h2>
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
                        >用户名</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="username-operate"
                          data-name="username"
                          value="LIKE"
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="username"
                          value=""
                          placeholder="用户名"
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
                      <label for="producttitle" class="control-label col-xs-4"
                        >产品名称</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="producttitle-operate"
                          data-name="producttitle"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="producttitle"
                          value=""
                          placeholder="产品名称"
                          id="producttitle"
                          data-index="2"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="remark" class="control-label col-xs-4"
                        >产品简介</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="remark-operate"
                          data-name="remark"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="remark"
                          value=""
                          placeholder="产品简介"
                          id="remark"
                          data-index="3"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="amount" class="control-label col-xs-4"
                        >购买金额</label
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
                          placeholder="购买金额"
                          id="amount"
                          data-index="4"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="createtime" class="control-label col-xs-4"
                        >购买时间</label
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
                          placeholder="购买时间"
                          id="createtime"
                          data-index="5"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="endtime" class="control-label col-xs-4"
                        >到期时间</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="endtime-operate"
                          data-name="endtime"
                          value="RANGE"
                          readonly=""
                        /><input
                          type="text"
                          class="form-control datetimerange"
                          name="endtime"
                          value=""
                          placeholder="到期时间"
                          id="endtime"
                          data-index="6"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="order_status" class="control-label col-xs-4"
                        >状态</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="order_status-operate"
                          data-name="order_status"
                          value="="
                          readonly=""
                        /><select class="form-control" name="order_status">
                          <option value="">选择</option>
                          <option value="0">锁定</option>
                          <option value="1">已赎回</option>
                        </select>
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="recoverytime" class="control-label col-xs-4"
                        >赎回时间</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="recoverytime-operate"
                          data-name="recoverytime"
                          value="RANGE"
                          readonly=""
                        /><input
                          type="text"
                          class="form-control datetimerange"
                          name="recoverytime"
                          value=""
                          placeholder="赎回时间"
                          id="recoverytime"
                          data-index="8"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <label for="fitamount" class="control-label col-xs-4"
                        >收益</label
                      >
                      <div class="col-xs-8">
                        <input
                          type="hidden"
                          class="form-control operate"
                          name="fitamount-operate"
                          data-name="fitamount"
                          value="="
                          readonly=""
                        /><input
                          type="text"
                          class="form-control"
                          name="fitamount"
                          value=""
                          placeholder="收益"
                          id="fitamount"
                          data-index="9"
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
              <div class="fixed-table-header" style="display: none">
                <table></table>
              </div>
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
                        {{ item.producttitle }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.remark }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.amount }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.createtime }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.endtime }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.order_status }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.recoverytime }}
                      </td>
                      <td style="text-align: center; vertical-align: middle">
                        {{ item.fitamount }}
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
                              >产品名称</span
                            ><span class="value">{{ item.producttitle }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >产品简介</span
                            ><span class="value">{{ item.remark }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >购买金额</span
                            ><span class="value">{{ item.amount }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >购买时间</span
                            ><span class="value">{{ item.createtime }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >到期时间</span
                            ><span class="value">{{ item.endtime }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >状态</span
                            ><span class="value">{{ item.order_status }}</span>
                          </div>

                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >赎回时间</span
                            ><span class="value">{{ item.recoverytime }}</span>
                          </div>
                          <div class="card-view">
                            <span
                              class="title"
                              style="text-align: center; vertical-align: middle"
                              >收益</span
                            ><span class="value">{{ item.fitamount }}</span>
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
  name: "FinancialRecords",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>


<script>
export default {
  name: "FinancialRecords",
  data() {
    return {
      iscommonsearch: true,
      isToggle: true, //是否切换视图
      headerList: [
        // 标题数组
        {
          label: "用户名",
          name: "username",
        },
        {
          label: "手机号",
          name: "mobile",
        },
        {
          label: "产品名称",
          name: "producttitle",
        },
        {
          label: "产品简介",
          name: "remark",
        },
        {
          label: "购买金额",
          name: "amount",
        },
        {
          label: "购买时间",
          name: "createtime",
        },
        {
          label: "到期时间",
          name: "endtime",
        },
        {
          label: "状态",
          name: "order_status",
        },
        {
          label: "赎回时间",
          name: "recoverytime",
        },
        {
          label: "收益",
          name: "fitamount",
        },
      ],
      bodyList: [
        // body数据
        {
          username: "110999961",
          mobile: "1234567890",
          producttitle: "Product A",
          remark: "日收益5%,锁定7天",
          amount: "100.00",
          createtime: "2021-01-22 02:16:58",
          endtime: "2021-01-29 02:16:58",
          order_status: "锁定",
          recoverytime: "无",
          fitamount: "0.00",
        },
        {
          username: "110999961",
          mobile: "1234567890",
          producttitle: "Product A",
          remark: "日收益5%,锁定7天",
          amount: "100.00",
          createtime: "2021-01-22 02:16:58",
          endtime: "2021-01-29 02:16:58",
          order_status: "已赎回",
          recoverytime: "无",
          fitamount: "-15.00",
        },
        {
          username: "110999961",
          mobile: "1234567890",
          producttitle: "Product A",
          remark: "日收益5%,锁定7天",
          amount: "100.00",
          createtime: "2021-01-22 02:16:58",
          endtime: "2021-01-29 02:16:58",
          order_status: "已赎回",
          recoverytime: "无",
          fitamount: "0.00",
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
.FinancialRecords {
  font-size: 13px;

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
  .card-view .title {
    font-size: 13px;
    font-weight: 700;
    display: inline-block;
    min-width: 30%;
    text-align: left !important;
  }
}
</style>

